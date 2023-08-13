import {Image, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import NfcManager, {NfcTech, TagEvent} from 'react-native-nfc-manager';
import {addCard} from '@/util/request/card';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {
  getCardAddModalVisible,
  setCardAddModalVisibie,
} from '@/redux/features/modal/modalState';
import {SLIDE} from '@/assets/static/texts/ModalText';
import {modalHeaderStlyes, modalStyles} from '@/assets/modals/ModalStyles';
import CloseIcon from '@/public/close-white.png';
import {AxiosError} from 'axios';
import {CardListURL, CardListFetcher} from '@/swr/cardSWR';
import useSWR from 'swr';

NfcManager.start();
const CardAddModal = () => {
  const cardListSWR = useSWR(CardListURL, CardListFetcher);
  const modalVisible = useAppSelector(getCardAddModalVisible);
  const dispatch = useAppDispatch();
  const readNdef = async () => {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);

      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();

      addCard(tag)
        .then(res => {
          cardListSWR.mutate();
          dispatch(setCardAddModalVisibie(false));
        })
        .catch((err: AxiosError) => {
          console.log(err.response.status);
        })
        .finally(() => {
          dispatch(setCardAddModalVisibie(false));
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
        dispatch(setCardAddModalVisibie(false));
      }}>
      <View style={modalStyles.container}>
        <View style={modalStyles.header}>
          <View style={modalHeaderStlyes.closeContainer}>
            <Pressable
              onPress={() => {
                NfcManager.cancelTechnologyRequest();
                dispatch(setCardAddModalVisibie(false));
              }}>
              <Image style={modalHeaderStlyes.icon} source={CloseIcon} />
            </Pressable>
          </View>
          <View style={modalHeaderStlyes.titleContainer}>
            <Text style={modalHeaderStlyes.title}>Add Card</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.tagMsgCard}>
            <Text style={styles.tagMsg}>Tag your card</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
  },
  tagMsgCard: {
    width: '100%',
    height: '7%',
    backgroundColor: '#EEE3CB',
    borderRadius: 14,
  },
  tagMsg: {
    color: '#000000',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 44,
  },
});

export default CardAddModal;
