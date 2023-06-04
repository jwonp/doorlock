import axios from 'axios';
import Config from 'react-native-config';
export const UserListFetcher = (url: string) => {
  axios.get(url).then(res => res.data);
};
export const UserListURL = () => {
  return `${Config.BACKEND_ENDPOINT}/user/list`;
};
