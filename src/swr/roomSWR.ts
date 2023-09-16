import Config from 'react-native-config';
import {request} from '@/util/request/controller/ApiController';

import {RoomWithReservationResponse} from '@/assets/models/dto/room/RoomResponse';

export const RoomListFetecher = (
  jwt:string,url: string,
): Promise<RoomWithReservationResponse[]> =>
  request(jwt).get(url).then(res => res.data);

export const RoomListURL = () => {
  return `${Config.BACKEND_ENDPOINT}/room/list/reservation`;
};

//cards users reservations
