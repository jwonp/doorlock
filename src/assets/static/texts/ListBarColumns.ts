import {
  CARD,
  DataTypes,
  RESERVATION,
  ROOM,
  USER,
} from '@/assets/static/texts/DataTypes';
interface Column {
  id: string;
}
interface CardColumn extends Column {
  reservationId: string;
  used: string;
}
interface UserColumn extends Column {
  name: string;
  lastTagged: string;
}
interface RoomColumn extends Column {
  address: string;
}
interface ReservationColumn extends Column {
  isCheckedIn: string;
}

const cardColumn: CardColumn = {
  id: 'Card ID',
  reservationId: 'Reservation ID',
  used: 'is Used',
};
const userColumn: UserColumn = {
  id: 'User ID',
  name: 'User Name',
  lastTagged: 'Last Tagged',
};
const roomColumn: RoomColumn = {
  id: 'Room ID',
  address: 'Address',
};
const reservationColumn: ReservationColumn = {
  id: 'Reservation ID',
  isCheckedIn: 'is Checked In',
};

export const getListBarColumn = (type: DataTypes): Column => {
  if (type === CARD) {
    return cardColumn;
  }
  if (type === USER) {
    return userColumn;
  }
  if (type === ROOM) {
    return roomColumn;
  }
  if (type === RESERVATION) {
    return reservationColumn;
  }
};
