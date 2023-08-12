import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import NfcManager, {NfcTech, TagEvent} from 'react-native-nfc-manager';

import {authorizeCard} from '@/util/request/auth';
import {AxiosResponse} from 'axios';
import {CardAuthorizedResponse} from '@/assets/models/dto/auth/AuthResponse';
import {ADMIN} from '@/assets/static/texts/AuthorizeResults';
import {useAppDispatch} from '@/redux/hooks';
import {DataType, setScreen} from '@/redux/features/modal/screenState';

// Pre-step, call this before any NFC operations
NfcManager.start();
const NFCScanScreen = ({navigation}: {navigation: any}) => {
  const dispatch = useAppDispatch();
  const [isEnabled, setEnabled] = useState(false);
  const readNdef = async () => {
    setEnabled(true);
    try {
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
      setEnabled(false);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
      setEnabled(false);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Pressable onPress={readNdef}>
        <Text style={styles.text}>
          {isEnabled ? 'Tag your card' : 'Press to start'}
        </Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#3c3c3c',
  },
});

export default NFCScanScreen;
