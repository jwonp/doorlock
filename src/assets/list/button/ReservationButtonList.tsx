import {headerButtonStyles} from '@/assets/buttons/HeaderButtonStyles';
import ReservationAddButton from '@/assets/buttons/reservation/ReservationAddButton';
import ReservationEditButton from '@/assets/buttons/reservation/ReservationEditButton';
import {View, StyleSheet} from 'react-native';
import {buttonListStyles} from './ButtonListStyles';

const ReservationButtonList = () => {
  return (
    <View style={buttonListStyles.container}>
      <View style={buttonListStyles.card}>
        <ReservationEditButton />
      </View>
      <View>
        <ReservationAddButton />
      </View>
    </View>
  );
};

export default ReservationButtonList;
