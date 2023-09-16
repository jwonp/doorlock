import Config from 'react-native-config';
import {request} from '@/util/request/controller/ApiController';
import {Reservation} from '@/assets/models/entity/Reservation';
import {ReservationFullResponse} from '@/assets/models/dto/reservation/ReservationResponse';
import {
  // ReservationAddCardResponse,
  ReservationAddRoomResponse,
  ReservationAddUserResponse,
} from '@/assets/models/dto/reservation/ReservationResponse';
import { DataTypes } from '@/assets/static/texts/DataTypes';


export const ReservationFetcher = (jwt:string,url: string): Promise<Reservation[]> =>
  request(jwt).get(url).then(res => res.data);

export const ReservationURL = () => {
  return `${Config.BACKEND_ENDPOINT}/reservation/list`;
};

export const ReservationDetailFetcher = (
  jwt:string, url: string,
): Promise<ReservationFullResponse> => request(jwt).get(url).then(res => res.data);

export const ReservationDetailURL = (id: number) => {
  return `${Config.BACKEND_ENDPOINT}/reservation/full?id=${id}`;
};

export const ReservationAddUserFetcher = (
  jwt:string, url: string,
): Promise<ReservationAddUserResponse> =>
  request(jwt).get(url).then(res => res.data);

export const ReservationAddUserURL = (id: string) => {
  if (!id || id === '') {
    return;
  }
  return `${Config.BACKEND_ENDPOINT}/user?id=${id}`;
};

export const ReservationAddRoomFetcher = (
  jwt:string, url: string,
): Promise<ReservationAddRoomResponse> =>
  request(jwt).get(url).then(res => res.data);

export const ReservationAddRoomURL = (id: number) => {
  if (!id || id === 0) {
    return;
  }
  return `${Config.BACKEND_ENDPOINT}/room?id=${id}`;
};

export const ReservationSelectFetcher = (jwt:string,url: string) =>
  request(jwt).get(url).then(res => res.data);

export const ReservationSelectURL = (type: DataTypes) => {
  return `${Config.BACKEND_ENDPOINT}/${type}/list/reservation`;
};

export const ReservationSearchFetcher = (jwt:string,url: string) => {
  return request(jwt).get(url).then(res => res.data);
};
export const ReservationSearchURL = (type: DataTypes, query: string) => {
  const searchBy = {
    card: 'id',
    user: 'id',
    room: 'address',
  };
  return `${Config.BACKEND_ENDPOINT}/${type}/search?${searchBy[type]}=${query}`;
};
