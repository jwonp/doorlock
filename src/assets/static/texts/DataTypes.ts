export const CARD = 'card';
export const USER = 'user';
export const ROOM = 'room';
export const LOG = 'log';
export const RESERVATION = 'reservation';
export const TAG = 'tag';

export const DataType = {
  card: CARD,
  user: USER,
  room: ROOM,
  log: LOG,
  reservation: RESERVATION,
  tag: TAG,
} as const;

export type DataTypes = (typeof DataType)[keyof typeof DataType];
