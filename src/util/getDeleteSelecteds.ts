import {
  CARD,
  DataTypes,
  RESERVATION,
  ROOM,
  USER,
} from '@/assets/static/texts/DataTypes';
import {deleteSelectedReservations} from './request/reservation';
import {deleteSelectedCards} from './request/card';
import {deleteSelectedRooms} from './request/room';
import {deleteSelectedUsers} from './request/user';

export const deleteSelected = async (
  type: DataTypes,
  selections: string[] | number[],
) => {
  switch (type) {
    case CARD:
      return await deleteSelectedCards(selections as string[]);

    case ROOM:
      return await deleteSelectedRooms(selections as number[]);

    case USER:
      return await deleteSelectedUsers(selections as string[]);

    case RESERVATION:
      return await deleteSelectedReservations(selections as number[]);
    default:
      return;
  }
};
