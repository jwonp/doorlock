import {Reservation} from '@/assets/models/entity/Reservation';
import {listBarStyles} from '@/assets/static/styles/LIstBarStyles';
import {getCheckedIn} from '@/util/convertDisplayText';
import {View, Pressable, Text} from 'react-native';

const ReservationListBar = ({data}: {data: Reservation}) => {
  const detailText = `#${data.id} | ${data.userId} reserved Room ${data.roomId} `;
  return (
    <Pressable>
      <View style={listBarStyles.container}>
        <View style={listBarStyles.titleCard}>
          <Text
            style={listBarStyles.titleText}>{`Reservation # ${data.id}`}</Text>
        </View>
        <View>
          <Text style={listBarStyles.detailText}>{detailText}</Text>

          <Text style={listBarStyles.detailTextOnRight}>
            {getCheckedIn(data.id, data.isCheckedIn)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ReservationListBar;
