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
import {useEffect, useState} from 'react';
import {ReservationModfiyRequest} from '@/assets/models/dto/reservation/ReservationRequest';
import {
  checkOut,
  modifyReservation,
  setCheckIn,
} from '@/util/request/reservation';
import {AxiosError} from 'axios';
import {ScrollView} from 'react-native';
const ReservationEditModal = () => {
  const modalVisible = useAppSelector(getReservationEditModalVisible);
  const dispatch = useAppDispatch();
  const reservationEditId = useAppSelector(getReservationEditId);
  const userId = useAppSelector(getReservationEditUserId);
  const cardId = useAppSelector(getReservationEditCardId);
  const roomId = useAppSelector(getReservationEditRoomId);
  const reservationSWR = useSWR(ReservationURL, ReservationFetcher);
  const reservationDetailSWR = useSWR(
    ReservationDetailURL(reservationEditId),
    ReservationDetailFetcher,
  );
  const userSWR = useSWR(
    userId ? ReservationAddUserURL(userId) : null,
    ReservationAddUserFetcher,
  );

  const roomSWR = useSWR(
    roomId ? ReservationAddRoomURL(roomId) : null,
    ReservationAddRoomFetcher,
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

  const [checkModalVisible, setCheckModalVisible] = useState<boolean>(false);
  return (
    <Modal
      visible={modalVisible}
      transparent={false}
      animationType={SLIDE}
      onRequestClose={() => {
        closeModal();
      }}>
      <Modal
        visible={checkModalVisible}
        transparent={true}
        animationType={'fade'}>
        <View style={checkModalVisible && checkModalStyles.background}></View>
        <View style={checkModalStyles.container}>
          <View style={checkModalStyles.submit}>
            <Pressable
              onPress={() => {
                checkOut(reservationDetailSWR.data.id).then(() => {
                  setCheckModalVisible(false);
                  reservationSWR.mutate();
                  closeModal();
                });
              }}>
              <Text style={checkModalStyles.text}>Check Out</Text>
            </Pressable>
          </View>
          <View style={checkModalStyles.cancel}>
            <Pressable
              onPress={() => {
                setCheckModalVisible(false);
              }}>
              <Text style={checkModalStyles.text}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

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
                  modifyReservation(reservationEditId, modifyData)
                    .then(() => {
                      closeModal();
                    })
                    .catch((err: AxiosError) => {
                      console.log(err.response.status);
                    });
                }}>
                <Text style={modalHeaderStlyes.submit}>Edit</Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View>
          <View style={modalStyles.main}>
            <View style={buttonStyles.container}>
              <View style={detail.isCheckedIn && buttonStyles.hidden}>
                <View style={buttonStyles.box}>
                  <View style={buttonStyles.card}>
                    <Pressable
                      onPress={() => {
                        setCheckIn(detail.id, true).then(() => {
                          reservationDetailSWR.mutate();
                          reservationSWR.mutate();
                        });
                      }}>
                      <Text style={buttonStyles.text}>Check In</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
              <View style={!detail.isCheckedIn && buttonStyles.hidden}>
                <View style={buttonStyles.box}>
                  <View style={buttonStyles.card}>
                    <Pressable
                      onPress={() => {
                        setCheckModalVisible(true);
                      }}>
                      <Text style={buttonStyles.text}>Check Out</Text>
                    </Pressable>
                  </View>
                  <View style={buttonStyles.card}>
                    <Pressable
                      onPress={() => {
                        setCheckIn(detail.id, false).then(() => {
                          reservationDetailSWR.mutate();
                          reservationSWR.mutate();
                        });
                      }}>
                      <Text style={buttonStyles.text}>Cancel Check In</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
            <ModalDataContainer>
              <ModalDataView
                title={'Reservation ID'}
                text={detail.id.toString()}
              />
            </ModalDataContainer>
            <ModalDataContainer tab={1}>
              <ModalDataCategoryView type={USER} />
              <ModalDataView title={'User ID'} text={detail.userId} />
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
              <ModalDataView title={'Card ID'} text={detail.cardId} />
            </ModalDataContainer>
            <ModalDataContainer tab={1}>
              <ModalDataCategoryView type={ROOM} />
              <ModalDataView
                title={'Room ID'}
                text={detail.roomId.toString()}
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
            <ModalDataContainer>
              <ModalDataView
                title={'is Checked In'}
                text={detail.isCheckedIn ? 'Checked In' : 'Not Checked In'}
              />
            </ModalDataContainer>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};
const checkModalStyles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    height: '100%',
    paddingBottom: '7%',
  },
  submit: {
    marginTop: 'auto',
    marginBottom: '7%',
    paddingTop: '1%',
    paddingBottom: '1%',
    width: '100%',
    backgroundColor: '#D7C0AE',
    borderRadius: 14,
  },
  cancel: {
    width: '100%',
    backgroundColor: '#D7C0AE',
    paddingTop: '1%',
    paddingBottom: '1%',
    borderRadius: 14,
  },
  text: {color: '#000000', textAlign: 'center', fontSize: 24},

  background: {
    height: '100%',
    backgroundColor: '#967E76',
    shadowOpacity: 0.5,
    opacity: 0.5,
  },
});
const buttonStyles = StyleSheet.create({
  container: {
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '2%',
    paddingBottom: '2%',
  },
  box: {
    width: '100%',
  },
  card: {
    width: '100%',
    backgroundColor: '#EEE3CB',
    paddingLeft: '4%',
    paddingRight: '4%',
    paddingTop: '2%',
    paddingBottom: '2%',
    marginRight: '3%',
    marginBottom: '2%',
    borderRadius: 6,
  },
  text: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  hidden: {
    display: 'none',
  },
});
export default ReservationEditModal;
