import {Modal, View, Text, Pressable, Image, StyleSheet} from 'react-native';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {
  getReservationEditModalVisible,
  setReservationEditModalVisible,
} from '@/redux/features/modal/modalState';
import {SLIDE} from '@/assets/static/texts/ModalText';
import {CARD, ROOM, USER} from '@/assets/static/texts/DataTypes';
import useSWR from 'swr';
import {
  ReservationAddRoomFetcher,
  ReservationAddRoomURL,
  ReservationAddUserFetcher,
  ReservationAddUserURL,
  ReservationDetailFetcher,
  ReservationDetailURL,
  ReservationFetcher,
  ReservationURL,
} from '@/swr/reservationSWR';
import {ReservationFullResponse} from '@/assets/models/dto/reservation/ReservationResponse';
import ModalDataContainer from '@/assets/list/data/modal/ModalDataContainer';
import ModalDataCategoryView from '@/assets/list/data/modal/ModalDataCategoryView';
import ModalDataView from '@/assets/list/data/modal/ModalDataView';
import {
  getReservationEditCardId,
  getReservationEditId,
  getReservationEditRoomId,
  getReservationEditUserId,
  resetEditIds,
} from '@/redux/features/modal/data/reservationEditState';
import {modalHeaderStlyes, modalStyles} from '@/assets/modals/ModalStyles';
import CloseIcon from '@/public/close-white.png';
import {useEffect} from 'react';
import {ReservationModfiyRequest} from '@/assets/models/dto/reservation/ReservationRequest';
import {modifyReservation} from '@/util/request/reservation';
import {AxiosError} from 'axios';
import {ScrollView} from 'react-native';
import {getToken} from '@/redux/features/tokenState';
const ReservationEditModal = () => {
  const jwt = useAppSelector(getToken);
  const modalVisible = useAppSelector(getReservationEditModalVisible);
  const dispatch = useAppDispatch();

  const reservationEditId = useAppSelector(getReservationEditId);
  const userId = useAppSelector(getReservationEditUserId);
  const cardId = useAppSelector(getReservationEditCardId);
  const roomId = useAppSelector(getReservationEditRoomId);

  const reservationDetailSWR = useSWR(
    ReservationDetailURL(reservationEditId),
    (url: string) => ReservationDetailFetcher(jwt, url),
  );

  const userSWR = useSWR(
    userId ? ReservationAddUserURL(userId) : null,
    (url: string) => ReservationAddUserFetcher(jwt, url),
  );

  const roomSWR = useSWR(
    roomId ? ReservationAddRoomURL(roomId) : null,
    (url: string) => ReservationAddRoomFetcher(jwt, url),
  );
  const skeletonData: ReservationFullResponse = {
    id: 0,
    userId: '',
    name: '',
    phone: '',
    cardId: '',
    roomId: 0,
    address: '',
    isCheckedIn: false,
  };
  const detail = reservationDetailSWR.data
    ? reservationDetailSWR.data
    : skeletonData;
  const isNotModified = userId === '' && cardId === '' && roomId === 0;
  useEffect(() => {
    userSWR.mutate();
  }, [userId]);

  useEffect(() => {
    roomSWR.mutate();
  }, [roomId]);

  const closeModal = () => {
    dispatch(resetEditIds());
    dispatch(setReservationEditModalVisible(false));
  };

  return (
    <Modal
      visible={modalVisible}
      transparent={false}
      animationType={SLIDE}
      onRequestClose={() => {
        closeModal();
      }}>
      <ScrollView style={modalStyles.container}>
        <View style={modalStyles.header}>
          <View style={modalHeaderStlyes.closeContainer}>
            <Pressable
              onPress={() => {
                closeModal();
              }}>
              <Image source={CloseIcon} style={modalHeaderStlyes.icon} />
            </Pressable>
          </View>
          <View style={modalHeaderStlyes.titleContainer}>
            <Text style={modalHeaderStlyes.title}>Edit Reservation</Text>
          </View>
          <View style={modalHeaderStlyes.submitContainer}>
            <View style={isNotModified && modalHeaderStlyes.hidden}>
              <Pressable
                onPress={() => {
                  const modifyData: ReservationModfiyRequest = {
                    userId: userId ? userId : null,
                    cardId: cardId ? cardId : null,
                    roomId: roomId ? roomId : null,
                  };
                  console.log(reservationEditId);
                  modifyReservation(jwt, reservationEditId, modifyData)
                    .then(() => {
                      closeModal();
                    })
                    .catch((err: AxiosError) => {
                      console.log(err.status);
                    });
                }}>
                <Text style={modalHeaderStlyes.submit}>Edit</Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View>
          <View style={modalStyles.main}>
            <ModalDataContainer>
              <ModalDataView
                title={'Reservation ID'}
                text={detail.id.toString()}
              />
            </ModalDataContainer>
            <ModalDataContainer tab={1}>
              <ModalDataCategoryView type={USER} />
              <ModalDataView
                title={'User ID'}
                text={userSWR && userSWR.data ? userSWR.data.id : detail.userId}
              />
              <ModalDataView
                title={'Name'}
                text={userSWR && userSWR.data ? userSWR.data.name : detail.name}
              />
              <ModalDataView
                title={'Phone'}
                text={
                  userSWR && userSWR.data ? userSWR.data.phone : detail.phone
                }
              />
            </ModalDataContainer>
            <ModalDataContainer tab={1}>
              <ModalDataCategoryView type={CARD} />
              <ModalDataView
                title={'Card ID'}
                text={cardId !== '' ? cardId : detail.cardId}
              />
            </ModalDataContainer>
            <ModalDataContainer tab={1}>
              <ModalDataCategoryView type={ROOM} />
              <ModalDataView
                title={'Room ID'}
                text={
                  roomSWR && roomSWR.data
                    ? roomSWR.data.id.toString()
                    : detail.roomId.toString()
                }
              />
              <ModalDataView
                title={'Address'}
                text={
                  roomSWR && roomSWR.data
                    ? roomSWR.data.address
                    : detail.address
                }
              />
            </ModalDataContainer>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default ReservationEditModal;
