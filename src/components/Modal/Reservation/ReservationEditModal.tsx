import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {
  getReservationEditModalVisible,
  setReservationEditModalVisible,
} from '@/redux/features/modalState';
import {SLIDE} from '@/assets/static/texts/ModalText';
import {CARD, ROOM, USER} from '@/assets/static/texts/DataTypes';
import {getSelectedReservation} from '@/redux/features/reservationState';
import useSWR from 'swr';
import {
  ReservationDetailFetcher,
  ReservationDetailURL,
} from '@/swr/reservationSWR';
import {ReservationFullResponse} from '@/assets/models/dto/reservation/ReservationFullResponse';
import {useMemo} from 'react';
const ReservationEditModal = () => {
  const modalVisible = useAppSelector(getReservationEditModalVisible);
  const dispatch = useAppDispatch();
  const reservation = useAppSelector(getSelectedReservation);
  const reservationDetailSWR = useSWR(
    ReservationDetailURL(reservation.id),
    ReservationDetailFetcher,
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
  const {id, userId, name, phone, cardId, roomId, address, isCheckedIn} =
    useMemo(() => {
      if (!reservationDetailSWR || !reservationDetailSWR.data) {
        return skeletonData;
      }
      return reservationDetailSWR.data;
    }, [reservationDetailSWR]);
  return (
    <Modal
      visible={modalVisible}
      transparent={false}
      animationType={SLIDE}
      onRequestClose={() => {
        dispatch(setReservationEditModalVisible(false));
      }}>
      <View style={styles.container}>
        <View style={detailStyles.container}>
          <View style={detailStyles.detail_card}>
            <View style={detailStyles.title_card}>
              <Text style={detailStyles.title}>Reservation ID</Text>
            </View>
            <View style={detailStyles.card}>
              <Text style={detailStyles.text}>{id}</Text>
            </View>
          </View>
          <View style={detailStyles.detail_card}>
            <View style={detailStyles.title_card}>
              <Text style={detailStyles.title}>User ID</Text>
            </View>
            <View style={detailStyles.card}>
              <Text style={detailStyles.text}>{userId}</Text>
            </View>
          </View>
          <View style={detailStyles.detail_card}>
            <View style={detailStyles.title_card}>
              <Text style={detailStyles.title}>Name</Text>
            </View>
            <View style={detailStyles.card}>
              <Text style={detailStyles.text}>{name}</Text>
            </View>
          </View>
          <View style={detailStyles.detail_card}>
            <View style={detailStyles.title_card}>
              <Text style={detailStyles.title}>Phone</Text>
            </View>
            <View style={detailStyles.card}>
              <Text style={detailStyles.text}>{phone}</Text>
            </View>
          </View>
          <View style={detailStyles.detail_card}>
            <View style={detailStyles.title_card}>
              <Text style={detailStyles.title}>Card ID</Text>
            </View>
            <View style={detailStyles.card}>
              <Text style={detailStyles.text}>{cardId}</Text>
            </View>
          </View>
          <View style={detailStyles.detail_card}>
            <View style={detailStyles.title_card}>
              <Text style={detailStyles.title}>Room ID</Text>
            </View>
            <View style={detailStyles.card}>
              <Text style={detailStyles.text}>{roomId}</Text>
            </View>
          </View>
          <View style={detailStyles.detail_card}>
            <View style={detailStyles.title_card}>
              <Text style={detailStyles.title}>Address</Text>
            </View>
            <View style={detailStyles.card}>
              <Text style={detailStyles.text}>{address}</Text>
            </View>
          </View>
          <View style={detailStyles.detail_card}>
            <View style={detailStyles.title_card}>
              <Text style={detailStyles.title}>is Checked In</Text>
            </View>
            <View style={detailStyles.card}>
              <Text style={detailStyles.text}>
                {isCheckedIn ? 'Checked In' : 'Not Checked In'}
              </Text>
            </View>
          </View>
        </View>
        <View style={buttonStyles.container}>
          <View style={buttonStyles.title_card}>
            <View>
              <Text style={buttonStyles.title}>Press to modify data</Text>
            </View>
          </View>
          <View style={buttonStyles.button_card}>
            <TouchableOpacity>
              <View style={buttonStyles.button}>
                <Text style={buttonStyles.text}>{CARD.toUpperCase()}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={buttonStyles.button}>
                <Text style={buttonStyles.text}>{ROOM.toUpperCase()}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={buttonStyles.button}>
                <Text style={buttonStyles.text}>{USER.toUpperCase()}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={cancelStyles.container}>
          <TouchableOpacity
            onPress={() => {
              dispatch(setReservationEditModalVisible(false));
            }}>
            <View style={cancelStyles.card}>
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
    backgroundColor: '#3c3c3c',
    flex: 1,
    justifyContent: 'space-around',
    padding: '5%',
  },

  text: {
    color: '#3c3c3c',
    textAlign: 'center',
    fontSize: 16,
  },
});
const buttonStyles = StyleSheet.create({
  container: {
    padding: '6%',
  },
  title_card: {marginBottom: '5%'},
  title: {
    color: '#ffffff',

    fontSize: 20,
  },
  button_card: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#ffffff',
    marginRight: '15%',
    padding: '2%',
    borderRadius: 8,
  },
  text: {
    color: '#3c3c3c',
    textAlign: 'center',
    fontSize: 16,
  },
});
const detailStyles = StyleSheet.create({
  container: {
    padding: '2%',
  },
  title_card: {paddingBottom: '1%'},
  title: {paddingBottom: '1%', color: '#ffffff'},
  detail_card: {padding: '1%'},
  card: {
    paddingLeft: '2%',
    paddingBottom: '1%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
  },
  text: {
    color: '#3c3c3c',
  },
});
const cancelStyles = StyleSheet.create({
  container: {
    marginTop: '2%',
    padding: '3%',
  },
  card: {
    padding: '0.5%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
  },
  text: {
    color: '#3c3c3c',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default ReservationEditModal;
