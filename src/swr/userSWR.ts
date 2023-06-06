import axios from 'axios';
import Config from 'react-native-config';

import {UserListResponse} from '../assets/models/dto/user/UserListResponse';
export const UserListFetcher = (url: string): Promise<UserListResponse[]> =>
  axios.get(url).then(res => res.data);
export const UserListURL = () => {
  return `${Config.BACKEND_ENDPOINT}/user`;
};
