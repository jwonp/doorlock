import {UserListResponse} from '@/assets/models/dto/user/UserListResponse';
import {CardWithReservationResponse} from '@/assets/models/dto/card/CardWithReservationResponse';
import {
  CARD,
  DataTypes,
  RESERVATION,
  ROOM,
  USER,
} from '@/assets/static/texts/DataTypes';
import UserListBar from './UserListBar';
import CardListBar from './CardListBar';
import RoomListBar from './RoomListBar';
import {RoomWithReservationResponse} from '@/assets/models/dto/room/RoomWithReservationResponse';
import {GestureResponderEvent} from 'react-native';
import {Reservation} from '@/assets/models/entity/Reservation';
import ReservationListBar from '@/assets/list/data/ReservationListBar';

const ListBar = ({
  data,
  type,
  index,
  onPress,
  onLongPress,
}: {
  data:
    | UserListResponse
    | CardWithReservationResponse
    | RoomWithReservationResponse
    | Reservation;
  type: DataTypes;
  index?: number;
  onPress?: (event: GestureResponderEvent) => any;
  onLongPress?: (event: GestureResponderEvent) => any;
}) => {
  if (type === USER) {
    return (
      <UserListBar
        data={data as UserListResponse}
        index={index}
        onPress={onPress}
        onLongPress={onLongPress}
      />
    );
  }
  if (type === ROOM) {
    return (
      <RoomListBar
        data={data as RoomWithReservationResponse}
        index={index}
        onPress={onPress}
        onLongPress={onLongPress}
      />
    );
  }
  if (type === CARD) {
    return (
      <CardListBar
        data={data as CardWithReservationResponse}
        index={index}
        onPress={onPress}
        onLongPress={onLongPress}
      />
    );
  }
  if (type === RESERVATION) {
    return (
      <ReservationListBar
        data={data as Reservation}
        index={index}
        onPress={onPress}
        onLongPress={onLongPress}
      />
    );
  }
};

export default ListBar;
