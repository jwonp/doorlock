import {CardWithReservationResponse} from '@/assets/models/dto/card/CardWithReservationResponse';
import {listBarStyles} from '@/assets/static/styles/ListBarStyles';
import {View, Text} from 'react-native';

type CardListBarProps = {
  data: CardWithReservationResponse;
};
const CardListBar = ({data}: CardListBarProps) => {
  const detailText = data.reservationId
    ? `#${data.reservationId} | ${data.userId} reserved Room ${data.roomId}`
    : 'Free';

  return (
    <View style={listBarStyles.container}>
      <View style={listBarStyles.titleCard}>
        <Text style={listBarStyles.titleText}>{data.id}</Text>
      </View>
      <View>
        <Text style={listBarStyles.detailText}>{detailText}</Text>
      </View>
    </View>
  );
};

export default CardListBar;
