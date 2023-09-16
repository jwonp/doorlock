import {AxiosResponse} from 'axios';
import {
  UserAddRequest,
  UserPatchRequest,
} from '@/assets/models/dto/user/UserRequest';
import {request} from '@/util/request/controller/ApiController';
import Config from 'react-native-config';
import {
  UserModifyRoomRequest,
  UserModifyCardRequest,
} from '@/assets/models/dto/user/UserRequest';

export const addUser = async (jwt: string, user: UserAddRequest) => {
  return await request(jwt).post(`${Config.BACKEND_ENDPOINT}/user`, user);
};
export const modifyCardidInUser = async (
  jwt: string,
  cardId: string,
  userId: string,
): Promise<AxiosResponse<boolean, any>> => {
  const CardIdModifyData: UserModifyCardRequest = {
    userId: userId,
    cardId: cardId,
  };
  return await request(jwt).patch('/user/card', CardIdModifyData);
};
export const modifyRoomIdInUser = async (
  jwt: string,
  roomId: number,
  userId: string,
): Promise<AxiosResponse<boolean, any>> => {
  const UserIdModifyData: UserModifyRoomRequest = {
    userId: userId,
    roomId: roomId,
  };
  return await request(jwt).patch('/user/room', UserIdModifyData);
};

export const deleteSelectedUsers = async (
  jwt: string,
  selectedUserIDList: string[],
) => {
  if (!selectedUserIDList || selectedUserIDList.length < 1) {
    return;
  }
  const userListToDelete = {
    idList: selectedUserIDList,
  };
  return await request(jwt).delete('/user', {data: userListToDelete});
};

export const modifyUser = async (jwt: string, user: UserPatchRequest) => {
  if (!user) {
    return;
  }

  return await request(jwt).patch('/user', user);
};
