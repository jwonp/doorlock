import {CARD, ROOM, USER} from '@/assets/static/texts/DataTypes';
import {SLIDE} from '@/assets/static/texts/ModalText';
import {
  getReservationAddModalVisible,
  getSelectModalVisible,
  setReservationAddModalVisible,
  setSelectModalVisible,
} from '@/redux/features/modalState';
import {ModalType, setModalType} from '@/redux/features/modalTypeState';
import {
  getReservationAddCardId,
  getReservationAddRoomId,
  getReservationAddUserId,
} from '@/redux/features/reservationAddState';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {
  ReservationAddUserFetcher,
  ReservationAddCardFetcher,
  ReservationAddRoomFetcher,
  ReservationAddUserURL,
  ReservationAddCardURL,
  ReservationAddRoomURL,
} from '@/swr/reservationSWR';
import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import useSWR from 'swr';

const ReservationAddModal = () => {
  const selectModalVisible = useAppSelector(getSelectModalVisible);
  const modalVisible = useAppSelector(getReservationAddModalVisible);
  const dispatach = useAppDispatch();
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
  return (
    <Modal
      visible={modalVisible}
      transparent={false}
      animationType={SLIDE}
      onRequestClose={() => {
        dispatach(setReservationAddModalVisible(false));
      }}>
      <View style={styles.container}>
        <View style={buttonStyles.container}>
          <View style={buttonStyles.titleCard}>
            <Text style={buttonStyles.title}>Select Reservation Data</Text>
          </View>
          <View style={buttonStyles.buttons}>
            <View style={buttonStyles.card}>
              <TouchableOpacity
                onPress={() => {
                  dispatach(setModalType(ModalType.user));
                  if (selectModalVisible === false) {
                    dispatach(setSelectModalVisible(true));
                  }
                }}>
                <View>
                  <Text style={buttonStyles.text}>{USER.toUpperCase()}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={buttonStyles.card}>
              <TouchableOpacity
                onPress={() => {
                  dispatach(setModalType(ModalType.card));
                  if (selectModalVisible === false) {
                    dispatach(setSelectModalVisible(true));
                  }
                }}>
                <View>
                  <Text style={buttonStyles.text}>{CARD.toUpperCase()}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={buttonStyles.card}>
              <TouchableOpacity
                onPress={() => {
                  dispatach(setModalType(ModalType.room));
                  if (selectModalVisible === false) {
                    dispatach(setSelectModalVisible(true));
                  }
                }}>
                <View>
                  <Text style={buttonStyles.text}>{ROOM.toUpperCase()}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={detailStyles.container}>
          <View style={detailStyles.categoryContainer}>
            <View>
              <Text style={detailStyles.categoryText}>
                {USER.toUpperCase()}
              </Text>
            </View>

            <View style={detailStyles.card}>
              <Text style={detailStyles.titleText}>{'id'}</Text>
              <View style={detailStyles.dataCard}>
                <Text style={detailStyles.dataText}>
                  {userSWR?.data?.id ?? ''}
                </Text>
              </View>
            </View>

            <View style={detailStyles.card}>
              <Text style={detailStyles.titleText}>{'name'}</Text>
              <View style={detailStyles.dataCard}>
                <Text style={detailStyles.dataText}>
                  {userSWR?.data?.name ?? ''}
                </Text>
              </View>
            </View>

            <View style={detailStyles.card}>
              <Text style={detailStyles.titleText}>{'phone'}</Text>
              <View style={detailStyles.dataCard}>
                <Text style={detailStyles.dataText}>
                  {userSWR?.data?.phone ?? ''}
                </Text>
              </View>
            </View>
          </View>

          <View style={detailStyles.categoryContainer}>
            <View>
              <Text style={detailStyles.categoryText}>
                {ROOM.toUpperCase()}
              </Text>
            </View>

            <View style={detailStyles.card}>
              <Text style={detailStyles.titleText}>{'id'}</Text>
              <View style={detailStyles.dataCard}>
                <Text style={detailStyles.dataText}>
                  {roomSWR?.data?.id ?? ''}
                </Text>
              </View>
            </View>
            <View style={detailStyles.card}>
              <Text style={detailStyles.titleText}>{'address'}</Text>
              <View style={detailStyles.dataCard}>
                <Text style={detailStyles.dataText}>
                  {roomSWR?.data?.address ?? ''}
                </Text>
              </View>
            </View>
          </View>

          <View style={detailStyles.categoryContainer}>
            <View>
              <Text style={detailStyles.categoryText}>
                {CARD.toUpperCase()}
              </Text>
            </View>

            <View style={detailStyles.card}>
              <Text style={detailStyles.titleText}>{'id'}</Text>
              <View style={detailStyles.dataCard}>
                <Text style={detailStyles.dataText}>
                  {cardSWR?.data?.id ?? ''}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={cancelStyles.container}>
          <TouchableOpacity
            onPress={() => {
              dispatach(setReservationAddModalVisible(false));
            }}>
            <View style={cancelStyles.button}>
              <Text style={cancelStyles.text}>Cancel</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: '5%',
    backgroundColor: '#3c3c3c',
  },
});
const buttonStyles = StyleSheet.create({
  container: {
    padding: '2%',
  },
  buttons: {
    paddingLeft: '2%',
    paddingRight: '2%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  titleCard: {
    padding: ' 1.5%',
    marginBottom: '2%',
  },
  title: {
    fontSize: 22,
    color: '#ffffff',
  },
  card: {
    width: '31%',
    padding: '1.5%',
    backgroundColor: '#ffffff',

    borderRadius: 18,
  },
  text: {
    textAlign: 'center',
    color: '#3c3c3c',
  },
});
const detailStyles = StyleSheet.create({
  container: {padding: '3%'},
  card: {
    marginTop: '3%',
    paddingLeft: '2%',
  },
  categoryContainer: {marginTop: '6%'},
  categoryText: {
    fontSize: 18,
    color: '#ffffff',
  },

  titleText: {fontSize: 16, color: '#ffffff'},

  dataCard: {
    marginTop: '2%',
    paddingLeft: '4%',
    paddingBottom: '1%',
    backgroundColor: '#ffffff',
    borderRadius: 14,
  },
  dataText: {fontSize: 14, color: '#3c3c3c'},
});
const cancelStyles = StyleSheet.create({
  container: {marginTop: '5%', padding: '5%'},
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#3c3c3c',
  },
});
export default ReservationAddModal;
