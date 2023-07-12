import {CardWithReservationResponse} from '@/assets/models/dto/card/CardWithReservationResponse';
import {listBarStyles} from '@/assets/static/styles/LIstBarStyles';
import {View, Text, Pressable} from 'react-native';

const CardListBar = ({data}: {data: CardWithReservationResponse}) => {
  const detailText = data.reservationId
    ? `#${data.reservationId} | ${data.userId} reserved ${data.roomId}`
    : 'No Reservation';
  return (
    <Pressable
      onPress={() => {
        console.warn(`${data.id} is pressed`);
      }}>
      <View style={listBarStyles.container}>
        <View style={listBarStyles.titleCard}>
          <Text style={listBarStyles.titleText}>{data.id}</Text>
        </View>
        <View>
          <Text style={listBarStyles.detailText}>{detailText}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CardListBar;
