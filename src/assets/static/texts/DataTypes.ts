export const CARD = 'card';
export const USER = 'user';
export const ROOM = 'room';

const dataTypeSet = {
  card: CARD,
  user: USER,
  room: ROOM,
} as const;

export type DataTypes = (typeof dataTypeSet)[keyof typeof dataTypeSet];
