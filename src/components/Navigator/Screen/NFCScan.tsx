import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import NfcManager, {NfcTech, TagEvent} from 'react-native-nfc-manager';

// Pre-step, call this before any NFC operations
NfcManager.start();
const NFCScanScreen = () => {
  const [tag, setTag] = useState<TagEvent>(null);
  const readNdef = async () => {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      setTag(tag);
      console.warn('Tag found', tag);
    } catch (ex) {
      console.warn('Oops!', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={readNdef}>
        <Text style={styles.text}>Scan a Tag</Text>
        <Text style={styles.text}>{tag === null ? 'NO DATA' : tag.id}</Text>
      </TouchableOpacity>
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
