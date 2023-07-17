import {Image, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import NfcManager, {NfcTech, TagEvent} from 'react-native-nfc-manager';
import {addCard} from '@/util/request/card';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {
  getCardAddModalVisible,
  setCardAddModalVisibie,
} from '@/redux/features/modalState';
import {SLIDE} from '@/assets/static/texts/ModalText';
import {modalHeaderStlyes, modalStyles} from '../ModalStyles';
import CloseIcon from '@/public/close-white.png';
import {AxiosError} from 'axios';

NfcManager.start();
const CardAddModal = () => {
  const modalVisible = useAppSelector(getCardAddModalVisible);
  const dispatach = useAppDispatch();
  const readNdef = async () => {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);

      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();

      addCard(tag)
        .then(res => {
          dispatach(setCardAddModalVisibie(false));
        })
        .catch((err: AxiosError) => {
          console.log(err.response.status);
        })
        .finally(() => {
          dispatach(setCardAddModalVisibie(false));
        });
    } catch (ex) {
      console.warn('Oops!', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  };
  return (
    <Modal
      visible={modalVisible}
      transparent={false}
      animationType={SLIDE}
      onShow={() => {
        readNdef();
      }}
      onRequestClose={() => {
        NfcManager.cancelTechnologyRequest();
        dispatach(setCardAddModalVisibie(false));
      }}>
      <View style={modalStyles.container}>
        <View style={modalStyles.header}>
          <View style={modalHeaderStlyes.iconContainer}>
            <Pressable
              onPress={() => {
                NfcManager.cancelTechnologyRequest();
                dispatach(setCardAddModalVisibie(false));
              }}>
              <Image style={modalHeaderStlyes.icon} source={CloseIcon} />
            </Pressable>
          </View>
          <View style={modalHeaderStlyes.titleContainer}>
            <Text style={modalHeaderStlyes.title}>New Card</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.tagMsgCard}>
            <Text style={styles.tagMsg}>Tag your Card on Device</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  tagMsgCard: {
    marginTop: '55%',
  },
  tagMsg: {
    fontSize: 30,
    textAlign: 'center',
    lineHeight: 50,
  },
});

export default CardAddModal;
