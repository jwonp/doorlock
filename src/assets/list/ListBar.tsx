import {UserListResponse} from '../models/dto/user/UserListResponse';
import {CardWithReservationResponse} from '../models/dto/card/CardWithReservationResponse';
import {CARD, DataTypes, ROOM, USER} from '../static/texts/DataTypes';
import UserListBar from './UserListBar';
import CardListBar from './CardListBar';
import RoomListBar from './RoomListBar';
import {RoomListResponse} from '../models/dto/room/RoomListResponse';
import {GestureResponderEvent} from 'react-native';

const ListBar = ({
  data,
  type,
  index,
  onPress,
  onLongPress,
}: {
  data: UserListResponse | CardWithReservationResponse | RoomListResponse;
  type: DataTypes;
  index: number;
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
        data={data as RoomListResponse}
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
};

export default ListBar;
