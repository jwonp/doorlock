import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';
import {authorizeCard} from '@/util/request/auth';
import {ADMIN} from '@/assets/static/texts/AuthorizeResults';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {
  DataType,
  getScreenType,
  setScreen,
} from '@/redux/features/modal/screenState';
import {screenStyles} from '@/assets/screen/ScreenStyleSheet';
import SelectModal from '@/components/Modal/SelectModal';
import {getAddress} from '@/redux/features/AddressState';
import EncryptedStorage from 'react-native-encrypted-storage';
// Pre-step, call this before any NFC operations
NfcManager.start();
const NFCScanScreen = ({navigation}: {navigation: any}) => {
  const dispatch = useAppDispatch();
  const screen = useAppSelector(getScreenType);
  const address = useAppSelector(getAddress);
  const [isEnabled, setEnabled] = useState(false);
  const getAddressFromStorage = async () => {
    try {
      const address = await EncryptedStorage.getItem('address');

      if (address !== undefined) {
        return address;
      }
    } catch (error) {
      console.log(error.code);
    }
  };
  const readNdef = async () => {
    try {
      setEnabled(true);
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      const addressFromStorage = await getAddressFromStorage();
      authorizeCard(tag.id, addressFromStorage).then(res => {
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
    if (screen !== DataType.scan) return;
    if (isEnabled === false) {
      readNdef();
    }
  }, [isEnabled, screen]);
  return (
    <View style={screenStyles.container}>
      <SelectModal />
      <Pressable onPress={readNdef}>
        <View style={styles.wrapper}>
          <View style={styles.button}>
            <Text style={styles.text}>
              {`Tag your card \nhere is\n${address}`}
            </Text>
          </View>
        </View>
      </Pressable>
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
