import {RoomWithReservationResponse} from '@/assets/models/dto/room/RoomWithReservationResponse';
import {listBarStyles} from '@/assets/static/styles/LIstBarStyles';
import {getRoomReservationsText} from '@/util/convertDisplayText';
import {View, Pressable, Text} from 'react-native';

const RoomListBar = ({data}: {data: RoomWithReservationResponse}) => {
  return (
    <Pressable>
      <View style={listBarStyles.container}>
        <View style={listBarStyles.titleCard}>
          <Text style={listBarStyles.titleText}>{`Room ${data.id}`}</Text>
        </View>
        <View>
          <Text style={listBarStyles.detailText}>{data.address}</Text>
          <Text style={listBarStyles.detailText}>
            {getRoomReservationsText(data.reservations)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RoomListBar;
