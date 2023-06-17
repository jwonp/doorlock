import {UserListResponse} from '../models/dto/user/UserListResponse';
import {CardListResponse} from '../models/dto/card/CardListResponse';
import {CARD, DataTypes, ROOM, USER} from '../static/texts/DataTypes';
import UserListBar from './UserListBar';
import CardListBar from './CardListBar';
import RoomListBar from './RoomListBar';
import {RoomListResponse} from '../models/dto/room/RoomListResponse';
import { GestureResponderEvent } from 'react-native';

const ListBar = ({
  data,
  type,
  index,
  onPress
}: {
  data: UserListResponse | CardListResponse | RoomListResponse;
  type: DataTypes;
  index: number;
  onPress:(event: GestureResponderEvent) => any
}) => {
  if (type === USER) {
    return <UserListBar data={data as UserListResponse} index={index} onPress={onPress}/>;
  }
  if (type === ROOM) {
    return <RoomListBar data={data as RoomListResponse} index={index} onPress={onPress} />;
  }
  if (type === CARD) {
    return <CardListBar data={data as CardListResponse} index={index} onPress={onPress} />;
  }
};

export default ListBar;
