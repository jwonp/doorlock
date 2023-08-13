import {CARD, ROOM, USER} from '@/assets/static/texts/DataTypes';
import {SLIDE} from '@/assets/static/texts/ModalText';
import {
  getReservationAddModalVisible,
  setReservationAddModalVisible,
} from '@/redux/features/modal/modalState';

import {
  getReservationAddCardId,
  getReservationAddRoomId,
  getReservationAddUserId,
  resetIds,
} from '@/redux/features/modal/data/reservationAddState';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {
  ReservationAddUserFetcher,
  ReservationAddCardFetcher,
  ReservationAddRoomFetcher,
  ReservationAddUserURL,
  ReservationAddCardURL,
  ReservationAddRoomURL,
} from '@/swr/reservationSWR';
import {Modal, View, Image, Text, StyleSheet, Pressable} from 'react-native';
import useSWR from 'swr';
import ModalDataView from '@/assets/list/data/modal/ModalDataView';
import ModalDataCategoryView from '@/assets/list/data/modal/ModalDataCategoryView';
import ModalDataContainer from '@/assets/list/data/modal/ModalDataContainer';
import {modalHeaderStlyes, modalStyles} from '@/assets/modals/ModalStyles';
import CloseIcon from '@/public/close-white.png';
import {addReservation} from '@/util/request/reservation';
import {ReservationAddRequest} from '@/assets/models/dto/reservation/ReservationRequest';
import {AxiosError} from 'axios';
import {useEffect} from 'react';
const ReservationAddModal = () => {
  const modalVisible = useAppSelector(getReservationAddModalVisible);
  const dispatch = useAppDispatch();
  const userId = useAppSelector(getReservationAddUserId);
  const cardId = useAppSelector(getReservationAddCardId);
  const roomId = useAppSelector(getReservationAddRoomId);
  const userSWR = useSWR(
    ReservationAddUserURL(userId),
    ReservationAddUserFetcher,
  );
  const cardSWR = useSWR(
    ReservationAddCardURL(cardId),
    ReservationAddCardFetcher,
  );
  const roomSWR = useSWR(
    ReservationAddRoomURL(roomId),
    ReservationAddRoomFetcher,
  );
  const isNotSelected = userId === '' || cardId === '' || roomId === 0;
  useEffect(() => {
    userSWR.mutate();
  }, [userId]);
  useEffect(() => {
    cardSWR.mutate();
  }, [cardId]);
  useEffect(() => {
    roomSWR.mutate();
  }, [roomId]);
  return (
    <Modal
      visible={modalVisible}
      transparent={false}
      animationType={SLIDE}
      onRequestClose={() => {
        dispatch(setReservationAddModalVisible(false));
      }}>
      <View style={modalStyles.container}>
        <View style={modalStyles.header}>
          <View style={modalHeaderStlyes.closeContainer}>
            <Pressable
              onPress={() => {
                dispatch(setReservationAddModalVisible(false));
              }}>
              <Image source={CloseIcon} style={modalHeaderStlyes.icon} />
            </Pressable>
          </View>
          <View style={modalHeaderStlyes.titleContainer}>
            <Text style={modalHeaderStlyes.title}>Add Reservation</Text>
          </View>
          <View style={modalHeaderStlyes.submitContainer}>
            <View style={isNotSelected && modalHeaderStlyes.hidden}>
              <Pressable
                onPress={() => {
                  const reservation: ReservationAddRequest = {
                    userId: userId,
                    cardId: cardId,
                    roomId: roomId,
                  };

                  addReservation(reservation)
                    .then(() => {
                      dispatch(resetIds());
                      dispatch(setReservationAddModalVisible(false));
                    })
                    .catch((err: AxiosError) => {
                      console.warn('Fail to reserve');
                    });
                }}>
                <Text style={modalHeaderStlyes.submit}>add</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={modalStyles.main}>
          <ModalDataContainer>
            <ModalDataCategoryView type={USER} />
            <ModalDataView title={'User ID'} text={userSWR?.data?.id} />
            <ModalDataView title={'Name'} text={userSWR?.data?.name} />
            <ModalDataView title={'Phone'} text={userSWR?.data?.phone} />
          </ModalDataContainer>
          <ModalDataContainer>
            <ModalDataCategoryView type={ROOM} />
            <ModalDataView title={'Room ID'} text={roomSWR?.data?.id.toString()} />
            <ModalDataView title={'Address'} text={roomSWR?.data?.address} />
          </ModalDataContainer>
          <ModalDataContainer>
            <ModalDataCategoryView type={CARD} />
            <ModalDataView title={'Card ID'} text={cardSWR?.data?.id} />
          </ModalDataContainer>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: '5%',
    backgroundColor: '#967E76',
  },
  detail: {
    padding: '3%',
  },
  cancel: {
    marginTop: '5%',
    padding: '5%',
  },
  button: {
    backgroundColor: '#EEE3CB',
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000000',
  },
});

export default ReservationAddModal;
