import Config from 'react-native-config';
import {request} from '@/util/request/controller/ApiController';

import {RoomWithReservationResponse} from '@/assets/models/dto/room/RoomWithReservationResponse';

export const RoomListFetecher = (
  url: string,
): Promise<RoomWithReservationResponse[]> =>
  request.get(url).then(res => res.data);

export const RoomListURL = () => {
  return `${Config.BACKEND_ENDPOINT}/room/list/reservation`;
};

//cards users reservations
