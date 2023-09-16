import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';
import {authorizeCard} from '@/util/request/auth';
import {ADMIN} from '@/assets/static/texts/AuthorizeResults';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {getScreenType, setScreen} from '@/redux/features/modal/screenState';
import {screenStyles} from '@/assets/screen/ScreenStyleSheet';
import SelectModal from '@/components/Modal/SelectModal';
import {getAddress} from '@/redux/features/AddressState';

import {CardListURL, CardListFetcher} from '@/swr/cardSWR';
import useSWR from 'swr';
import {CARD, TAG} from '@/assets/static/texts/DataTypes';
import {getToken, setToken} from '@/redux/features/tokenState';
// Pre-step, call this before any NFC operations
NfcManager.start();
const NFCTagScreen = ({navigation}: {navigation: any}) => {
  const dispatch = useAppDispatch();
  const screen = useAppSelector(getScreenType);
  const address = useAppSelector(getAddress);
  const [isEnabled, setEnabled] = useState(false);
  const jwt = useAppSelector(getToken)
  const cardListSWR = useSWR(CardListURL, (url:string)=>CardListFetcher(jwt,url));

  const readNdef = async () => {
    try {
      setEnabled(true);
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();

      authorizeCard(tag.id, address).then(res => {
        if (res.data.result.split('.').length > 2) {
          dispatch(setScreen(CARD));
          dispatch(setToken(res.data.result));
          console.warn(res.data.result);
          cardListSWR.mutate();
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
    if (screen !== TAG) return;
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

export default NFCTagScreen;
