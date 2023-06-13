import axios from 'axios';
import Config from 'react-native-config';

import {CardListResponse} from '../assets/models/dto/card/CardListResponse';
export const CardListFetcher = (url: string): Promise<CardListResponse[]> =>
  axios.get(url).then(res => res.data);

export const CardListURL = () => {
  return `${Config.BACKEND_ENDPOINT}/card`;
};
