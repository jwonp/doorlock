import Config from 'react-native-config';

import {request} from '@/util/request/controller/ApiController';
import { Log } from '@/assets/models/entity/Log';
export const LogListFetcher = (jwt:string,url: string): Promise<Log[]> =>
  request(jwt).get(url).then(res => res.data);

export const LogListURL = () => {
  return `${Config.BACKEND_ENDPOINT}/log/list`;
};
