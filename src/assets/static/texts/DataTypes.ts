export const CARD = 'card';
export const USER = 'user';
export const ROOM = 'room';
export const RESERVATION = 'reservation';
export const SCAN = 'scan';

const dataTypeSet = {
  card: CARD,
  user: USER,
  room: ROOM,
  reservation: RESERVATION,
  scan: SCAN,
} as const;

export type DataTypes = (typeof dataTypeSet)[keyof typeof dataTypeSet];
