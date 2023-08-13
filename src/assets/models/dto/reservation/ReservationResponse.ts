export interface ReservationFullResponse {
  id: number;
  userId: string;
  name: string;
  phone: string;
  cardId: string;
  roomId: number;
  address: string;
  isCheckedIn: boolean;
}

export interface ReservationAddUserResponse {
  id: string;
  name: string;
  phone: string;
}

export interface ReservationAddRoomResponse {
  id: number;
  address: string;
}
