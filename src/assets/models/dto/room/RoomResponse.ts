import {ReservationWithoutRoomId} from '../../types/RerservationWithoutRoomId';

export interface RoomWithReservationResponse {
  id: number;
  address: string;
  reservations: ReservationWithoutRoomId[];
}
