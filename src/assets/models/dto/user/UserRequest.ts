import {User} from '../../entity/User';

export interface UserAddRequest {
  id: string;
  password: string;
  name: string;
  phone: string;
}

interface UserModifyRequest {
  userId: string;
}

export interface UserModifyCardRequest extends UserModifyRequest {
  cardId: string;
}

export interface UserModifyRoomRequest extends UserModifyRequest {
  roomId: number;
}

export interface UserPatchRequest extends Partial<User> {}
