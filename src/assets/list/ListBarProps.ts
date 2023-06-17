import {CardListResponse} from '../models/dto/card/CardListResponse';
import {RoomListResponse} from '../models/dto/room/RoomListResponse';
import {UserListResponse} from '../models/dto/user/UserListResponse';
import {GestureResponderEvent} from 'react-native';
type ListBar = {
  data: CardListResponse | RoomListResponse | UserListResponse;
  index: number;
  onPress: (event: GestureResponderEvent) => any;
};

export interface UserListBarProps extends ListBar {
  data: UserListResponse;
}

export interface CardListBarProps extends ListBar {
  data: CardListResponse;
}

export interface RoomListBarProps extends ListBar {
  data: RoomListResponse;
}
