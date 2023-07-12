import {CardWithReservationResponse} from '@/assets/models/dto/card/CardWithReservationResponse';
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
      <View
        style={{
          paddingLeft: '5%',
          paddingRight: '5%',
          paddingBottom: '2%',
          paddingTop: '1%',
          marginBottom: '3%',
          backgroundColor: '#EEE3CB',
          borderRadius: 16,
        }}>
        <View
          style={{
            marginBottom: '1.5%',
          }}>
          <Text
            style={{
              color: '#000000',
              borderBottomWidth: 1.5,
              borderBottomColor: '#967E76',
            }}>
            {data.id}
          </Text>
        </View>
        <View style={{}}>
          <Text style={{color: '#000000', textAlign: 'left'}}>
            {detailText}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CardListBar;
