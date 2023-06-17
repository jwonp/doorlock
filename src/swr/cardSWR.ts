import axios from 'axios';
import Config from 'react-native-config';

import {CardListResponse} from '../assets/models/dto/card/CardListResponse';
import {ModalType} from '../redux/features/modalTypeState';
import {UserListResponse} from '../assets/models/dto/user/UserListResponse';
import {RoomListResponse} from '../assets/models/dto/room/RoomListResponse';
export const CardListFetcher = (url: string): Promise<CardListResponse[]> =>
  axios.get(url).then(res => res.data);

export const CardListURL = () => {
  return `${Config.BACKEND_ENDPOINT}/card`;
};

export const SelectDataFetcher = (
  url: string,
): Promise<RoomListResponse[] | UserListResponse[]> =>
  axios.get(url).then(res => res.data);

export const CardSelectDataURL = (type: ModalType) => {
  return `${Config.BACKEND_ENDPOINT}/${type}`;
};
