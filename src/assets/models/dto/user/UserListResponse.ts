import {keys} from 'ts-transformer-keys';
export interface UserListResponse {
  id: string;
  name: string;
  phone: string;
  lastTagged: string;
  roomId: number;
  cardId: string;
}

export const UserListResponseKeys = keys<UserListResponse>();
