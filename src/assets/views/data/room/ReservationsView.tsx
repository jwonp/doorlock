import {View, Text, StyleSheet} from 'react-native';
import {ReservationWithoutRoomId} from '../../../models/types/RerservationWithoutRoomId';
import {useMemo} from 'react';

const ReservationsView = ({
  reservations,
}: {
  reservations: ReservationWithoutRoomId[];
}) => {
  const ReservationList = useMemo(() => {
    if (reservations === undefined || reservations.length === 0) {
      return (
        <View style={styles.exceptionCard}>
          <Text style={styles.exceptionText}>No Reservation</Text>
        </View>
      );
    }
    return reservations.map((reservation, index) => (
      <View key={index} style={styles.card}>
        <Text style={styles.text}>{reservation.id}</Text>
      </View>
    ));
  }, [reservations]);
  return <View style={styles.container}>{ReservationList}</View>;
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  exceptionCard: {
    width: '100%',
    paddingLeft: '3.5%',
    paddingBottom: '1%',
    marginRight: '5%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
  },
  exceptionText: {
    color: '#3c3c3c',
  },
  card: {
    width: '15%',
    paddingBottom: '1%',
    marginRight: '5%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
  },
  whiteText: {
    color: '#ffffff',
  },
  text: {
    textAlign: 'center',
    color: '#3c3c3c',
  },
});
export default ReservationsView;
