import axios from 'axios';
import Config from 'react-native-config';
import {UserListResponse} from '@/assets/models/dto/user/UserResponse';
import {request} from '@/util/request/controller/ApiController';
import {User} from '@/assets/models/entity/User';
export const UserListFetcher = (url: string): Promise<UserListResponse[]> =>
  request.get(url).then(res => res.data);

export const UserListURL = () => {
  return `${Config.BACKEND_ENDPOINT}/user/list`;
};

export const SelectedUserFetcher = (
  url: string,
): Promise<Omit<User, 'password'>> => axios.get(url).then(res => res.data);

export const selectUserURL = (userId: string) => {
  return `${Config.BACKEND_ENDPOINT}/user?id=${userId}`;
};
