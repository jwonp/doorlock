import {Text, Pressable} from 'react-native';

import {listStyles, styles, reservationWithStyles} from './ListBarStyleSheet';
import {ReservationListBarProps} from './ListBarProps';

const ReservationListBar = ({
  data,
  onPress,
  onLongPress,
}: ReservationListBarProps) => {
  return (
    <Pressable
      style={listStyles.itemContainer}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Text style={{...styles.text, ...reservationWithStyles.id}}>
        {`${data.id}`}
      </Text>

      <Text
        style={{
          ...styles.text,
          ...styles.right,
          ...reservationWithStyles.ischeckedIn,
        }}>
        {`${data.isCheckedIn ? 'Checked In' : 'Not Checked In'}`}
      </Text>
    </Pressable>
  );
};

export default ReservationListBar;
