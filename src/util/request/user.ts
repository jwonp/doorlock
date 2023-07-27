import {AxiosResponse} from 'axios';
import {UserAddRequest} from '@/assets/models/dto/user/UserRequest';
import {request} from '@/util/request/controller/ApiController';
import Config from 'react-native-config';
import {
  UserModifyRoomRequest,
  UserModifyCardRequest,
} from '@/assets/models/dto/user/UserRequest';

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
export const modifyRoomIdInUser = async (
  roomId: number,
  userId: string,
): Promise<AxiosResponse<boolean, any>> => {
  const UserIdModifyData: UserModifyRoomRequest = {
    userId: userId,
    roomId: roomId,
  };
  return await request.patch('/user/room', UserIdModifyData);
};

export const deleteSelectedUsers = async (selectedUserIDList: string[]) => {
  if (!selectedUserIDList || selectedUserIDList.length < 1) {
    return;
  }
  const userListToDelete = {
    idList: selectedUserIDList,
  };
  return await request.delete('/user', {data: userListToDelete});
};
