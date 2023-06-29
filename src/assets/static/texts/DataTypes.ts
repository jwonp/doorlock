export const CARD = 'card';
export const USER = 'user';
export const ROOM = 'room';
export const RESERVATION = 'reservation';

const dataTypeSet = {
  card: CARD,
  user: USER,
  room: ROOM,
  reservation:RESERVATION
} as const;

export type DataTypes = (typeof dataTypeSet)[keyof typeof dataTypeSet];
