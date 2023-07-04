import ReservationAddButton from '@/assets/buttons/ReservationAddButton';
import ReservationEditButton from '@/assets/buttons/ReservationEditButton';
import {View, StyleSheet} from 'react-native';

const ReservationButtonsList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ReservationEditButton />
      </View>
      <View>
        <ReservationAddButton />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  card: {
    marginRight: '5%',
  },
});
export default ReservationButtonsList;
