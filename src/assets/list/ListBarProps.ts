import {CardWithReservationResponse} from '../models/dto/card/CardWithReservationResponse';
import {RoomListResponse} from '../models/dto/room/RoomListResponse';
import {UserListResponse} from '../models/dto/user/UserListResponse';
import {GestureResponderEvent} from 'react-native';
type ListBar = {
  data: CardWithReservationResponse | RoomListResponse | UserListResponse;
  index?: number;
  onPress?: (event: GestureResponderEvent) => any;
  onLongPress?:(event: GestureResponderEvent) => any;
};

export interface UserListBarProps extends ListBar {
  data: UserListResponse;
}

export interface CardListBarProps extends ListBar {
  data: CardWithReservationResponse;
}

export interface RoomListBarProps extends ListBar {
  data: RoomListResponse;
}
