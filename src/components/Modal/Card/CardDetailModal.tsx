import {modalHeaderStlyes, modalStyles} from '@/assets/modals/ModalStyles';
import {Image, Modal, Pressable, View, Text} from 'react-native';
import CloseIcon from '@/public/close-white.png';
import ModalDataContainer from '@/assets/list/data/modal/ModalDataContainer';
import ModalDataView from '@/assets/list/data/modal/ModalDataView';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {getCardDetail} from '@/redux/features/modal/data/CardDetailState';

import {
  getCardDetailModalVisible,
  setCardDetailModalVisible,
} from '@/redux/features/modal/modalState';
import {SLIDE} from '@/assets/static/texts/ModalText';
import {getDisplayTechTypes} from '@/util/convertDisplayText';
const CardDetailModal = () => {
  const detail = useAppSelector(getCardDetail);
  const modalVisible = useAppSelector(getCardDetailModalVisible);
  const dispatch = useAppDispatch();
  return (
    <Modal
      visible={modalVisible}
      transparent={false}
      animationType={SLIDE}
      onRequestClose={() => {
        dispatch(setCardDetailModalVisible(false));
      }}>
      <View style={modalStyles.container}>
        <View style={modalStyles.header}>
          <View style={modalHeaderStlyes.closeContainer}>
            <Pressable
              onPress={() => {
                dispatch(setCardDetailModalVisible(false));
              }}>
              <Image source={CloseIcon} style={modalHeaderStlyes.icon} />
            </Pressable>
          </View>
          <View style={modalHeaderStlyes.titleContainer}>
            <Text style={modalHeaderStlyes.title}></Text>
          </View>
        </View>
        <View style={modalStyles.main}>
          <ModalDataContainer>
            <ModalDataView title={'Card ID'} text={detail.id} />
            <ModalDataView
              title={'Max Size'}
              text={detail.maxSize.toString()}
            />

            <ModalDataView
              title={'Tech Type'}
              text={getDisplayTechTypes(detail.techType)}
            />
            <ModalDataView title={'Type'} text={detail.type} />
            <ModalDataView
              title={'Reservation ID'}
              text={detail.reservationId.toString()}
            />
            <ModalDataView title={'User ID'} text={detail.userId} />
            <ModalDataView title={'Room ID'} text={detail.roomId.toString()} />
          </ModalDataContainer>
        </View>
      </View>
    </Modal>
  );
};

export default CardDetailModal;
