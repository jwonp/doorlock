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
