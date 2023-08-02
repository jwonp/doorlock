import {modalHeaderStlyes, modalStyles} from '@/assets/modals/ModalStyles';
import {SLIDE} from '@/assets/static/texts/ModalText';
import {
  getRoomDetailModalVisible,
  setReservationEditModalVisible,
  setRoomDetailModalVisible,
} from '@/redux/features/modal/modalState';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {Modal, Text, View, Image, Pressable} from 'react-native';
import CloseIcon from '@/public/close-white.png';
import ModalDataView from '@/assets/list/data/modal/ModalDataView';
import ModalDataContainer from '@/assets/list/data/modal/ModalDataContainer';
import {getRoomDetail} from '@/redux/features/modal/data/roomDetailState';
import {setReservationEditId} from '@/redux/features/modal/data/reservationEditState';
import {setSelectModalAction} from '@/redux/features/modal/selectModalState';
import {EDIT} from '@/assets/static/texts/SelectModalActions';
const RoomDetailModal = () => {
  const modalVisible = useAppSelector(getRoomDetailModalVisible);
  const dispatch = useAppDispatch();
  const detail = useAppSelector(getRoomDetail);

  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      animationType={SLIDE}
      onRequestClose={() => {
        dispatch(setRoomDetailModalVisible(false));
      }}>
      <View style={modalStyles.container}>
        <View style={modalStyles.header}>
          <View style={modalHeaderStlyes.closeContainer}>
            <Pressable
              onPress={() => {
                dispatch(setRoomDetailModalVisible(false));
              }}>
              <Image source={CloseIcon} style={modalHeaderStlyes.icon} />
            </Pressable>
          </View>
          <View style={modalHeaderStlyes.titleContainer}>
            <Text style={modalHeaderStlyes.title}>Room</Text>
          </View>
        </View>
        <View style={modalStyles.main}>
          <ModalDataContainer>
            <ModalDataView title={'ID'} text={detail.id.toString()} />
            <ModalDataView title={'Address'} text={detail.address} />
          </ModalDataContainer>

          {detail.reservations.map((item, index) => (
            <ModalDataContainer key={index} tab={1}>
              <View
                style={{
                  marginBottom: '5%',
                  borderRadius: 16,
                  borderBottomWidth: 3,
                  borderColor: '#EEE3CB',
                }}></View>
              <Pressable
                onLongPress={() => {
                  dispatch(setSelectModalAction(EDIT));
                  dispatch(setReservationEditId(item.id));
                  dispatch(setReservationEditModalVisible(true));
                }}>
                <ModalDataView
                  title={'Reservation ID'}
                  text={item.id.toString()}
                />
                <ModalDataView title={'User ID'} text={item.userId} />
                <ModalDataView title={'Card ID'} text={item.cardId} />
              </Pressable>
            </ModalDataContainer>
          ))}
        </View>
      </View>
    </Modal>
  );
};
export default RoomDetailModal;
