import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';
import {authorizeCard} from '@/util/request/auth';
import {ADMIN} from '@/assets/static/texts/AuthorizeResults';
import {useAppDispatch} from '@/redux/hooks';
import {DataType, setScreen} from '@/redux/features/modal/screenState';
import {screenStyles} from '@/assets/screen/ScreenStyleSheet';

// Pre-step, call this before any NFC operations
NfcManager.start();
const NFCScanScreen = ({navigation}: {navigation: any}) => {
  const dispatch = useAppDispatch();
  const [isEnabled, setEnabled] = useState(false);

  const readNdef = async () => {
    try {
      setEnabled(true);
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();

      authorizeCard(tag.id).then(res => {
        if (res.data.result === ADMIN) {
          dispatch(setScreen(DataType.card));
          navigation.navigate('card');
        }
      });
    } catch (ex) {
      console.log('fail to tag', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest().then(() => {
        setEnabled(false);
      });
    }
  };
  useEffect(() => {
    if (isEnabled === false) {
      readNdef();
    }
  }, [isEnabled]);
  return (
    <View style={screenStyles.container}>
      <View style={styles.wrapper}>
        <View style={styles.button}>
          <Text style={styles.text}>
            {isEnabled ? 'Tag your card' : 'Press to start'}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#967E76',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '95%',
    height: '7%',
    backgroundColor: '#EEE3CB',
    borderRadius: 14,
  },
  text: {
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: 40,
    fontSize: 18,
    color: '#000000',
  },
});

export default NFCScanScreen;
