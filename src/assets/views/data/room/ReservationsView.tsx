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
      return <Text style={styles.whiteText}>No Reservation</Text>;
    }
    return reservations.map((reservation, index) => (
      <View key={index} style={styles.listContainer}>
        <Text style={styles.text}>{reservation.id}</Text>
      </View>
    ));
  }, [reservations]);
  return <View style={styles.container}>{ReservationList}</View>;
};
const styles = StyleSheet.create({
  container: {
    marginRight: '2%',
    flexDirection: 'row',
    padding: '1%',
  },
  listContainer: {
    width: '15%',
    paddingTop: '2%',
    paddingBottom: '2%',
    marginRight: '2%',
    borderColor: '#ffffff',
    borderRadius: 11,
    overflow: 'hidden',
  },
  whiteText: {
    color: '#ffffff',
  },
  text: {
    backgroundColor: '#ffffff',
    textAlign: 'center',
    color: '#3c3c3c',
  },
});
export default ReservationsView;
