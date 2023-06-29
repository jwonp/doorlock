import {CardWithReservationResponse} from '../models/dto/card/CardWithReservationResponse';
import { RoomWithReservationResponse} from '../models/dto/room/RoomWithReservationResponse';
import {UserListResponse} from '../models/dto/user/UserListResponse';
import {GestureResponderEvent} from 'react-native';
import { Reservation } from '../models/entity/Reservation';
type ListBar = {
  data: CardWithReservationResponse | RoomWithReservationResponse | UserListResponse | Reservation;
  index?: number;
  onPress?: (event: GestureResponderEvent) => any;
  onLongPress?: (event: GestureResponderEvent) => any;
};

export interface UserListBarProps extends ListBar {
  data: UserListResponse;
}

export interface CardListBarProps extends ListBar {
  data: CardWithReservationResponse;
}

export interface RoomListBarProps extends ListBar {
  data: RoomWithReservationResponse;
}
export interface ReservationListBarProps extends ListBar {
  data: Reservation;
}
