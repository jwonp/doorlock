import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import NfcManager, {NfcTech, TagEvent} from 'react-native-nfc-manager';
import {addCard} from '@/util/request/card';

// Pre-step, call this before any NFC operations
NfcManager.start();
const NFCScanScreen = () => {
  const [tag, setTag] = useState<TagEvent>(null);
  const [result, setResult] = useState<String>('');
  const readNdef = async () => {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);

      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();

      addCard(tag)
        .then(res => {
          setResult(`${res.data.id} is saved`);
        })
        .catch(err => {
          setResult('Fail to request add card');
        });

      setTag(tag);
      
    } catch (ex) {
      console.warn('Oops!', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  };

  return (
    <View style={styles.wrapper}>
      <Pressable onPress={readNdef}>
        <Text style={styles.text}>Scan a Tag</Text>
      </Pressable>
      <Text style={styles.text}>{result}</Text>
      {tag === null ? (
        <Text style={styles.text}>NO DATA</Text>
      ) : (
        <View>
          <Text style={styles.text}>{tag.id}</Text>
          <Text style={styles.text}>{tag.maxSize}</Text>
          <Text style={styles.text}>NDEF Message</Text>
          {tag?.ndefMessage ? (
            tag?.ndefMessage.map((message,index) => {
              return (
                <View key={index}>
                  <Text style={styles.text}>{message.id}</Text>
                  <Text style={styles.text}>{message.payload}</Text>
                  <Text style={styles.text}>{message.tnf}</Text>
                  <Text style={styles.text}>{message.type}</Text>
                </View>
              );
            })
          ) : (
            <Text style={styles.text}>NO NDEF MESSAGE</Text>
          )}
          <Text style={styles.text}>Tech Types</Text>
          {tag?.techTypes ? (
            tag?.techTypes.map((type,index) => {
              return (
                <View key={index}>
                  <Text style={styles.text}>{type}</Text>
                </View>
              );
            })
          ) : (
            <Text style={styles.text}>NO TECH TYPES</Text>
          )}

          <Text style={styles.text}>Type</Text>
          <Text style={styles.text}>{tag?.type}</Text>
        </View>
      )}
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
