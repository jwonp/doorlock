import {Reservation} from '@/assets/models/entity/Reservation';
import {listBarStyles} from '@/assets/static/styles/ListBarStyles';
import {getCheckedIn} from '@/util/convertDisplayText';
import {View, Text} from 'react-native';

const ReservationListBar = ({data}: {data: Reservation}) => {
  const detailText = `#${data.id} | ${data.userId} reserved Room ${data.roomId} `;
  return (
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
  );
};

export default ReservationListBar;
