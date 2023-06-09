import {AxiosResponse} from 'axios';
import {UserAddRequest} from '@/assets/models/dto/user/UserAddRequest';
import {request} from '@/util/request/controller/ApiController';
import Config from 'react-native-config';
import {
  UserModifyRoomRequest,
  UserModifyCardRequest,
} from '@/assets/models/dto/user/UserModifyRequest';

export const addUser = async (user: UserAddRequest) => {
  return await request.post(`${Config.BACKEND_ENDPOINT}/user`, user);
};
export const modifyCardidInUser = async (
  cardId: string,
  userId: string,
): Promise<AxiosResponse<boolean, any>> => {
  const CardIdModifyData: UserModifyCardRequest = {
    userId: userId,
    cardId: cardId,
  };
  return await request.patch('/user/card', CardIdModifyData);
};
export const modifyRoomidInUser = async (
  roomId: number,
  userId: string,
): Promise<AxiosResponse<boolean, any>> => {
  const UserIdModifyData: UserModifyRoomRequest = {
    userId: userId,
    roomId: roomId,
  };
  return await request.patch('/user/room', UserIdModifyData);
};
