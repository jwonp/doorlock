import axios from 'axios';
import Config from 'react-native-config';

import {UserListResponse} from '@/assets/models/dto/user/UserListResponse';
import {UserDataState} from '@/redux/features/userState';
import { request } from '@/util/request/controller/ApiController';
export const UserListFetcher = (url: string): Promise<UserListResponse[]> =>
  request.get(url).then(res => res.data);

export const UserListURL = () => {
  return `${Config.BACKEND_ENDPOINT}/user/list`;
};

export const SelectedUserFetcher = (url: string): Promise<UserDataState> =>
  axios.get(url).then(res => res.data);

export const selectUserURL = (userId: string) => {
  return `${Config.BACKEND_ENDPOINT}/user?id=${userId}`;
};
