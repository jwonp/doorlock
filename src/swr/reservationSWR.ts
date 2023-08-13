import Config from 'react-native-config';
import {request} from '@/util/request/controller/ApiController';
import {Reservation} from '@/assets/models/entity/Reservation';
import {ReservationFullResponse} from '@/assets/models/dto/reservation/ReservationResponse';
import {
  ReservationAddCardResponse,
  ReservationAddRoomResponse,
  ReservationAddUserResponse,
} from '@/assets/models/dto/reservation/ReservationResponse';
import {DataType} from '@/redux/features/modal/screenState';

export const ReservationFetcher = (url: string): Promise<Reservation[]> =>
  request.get(url).then(res => res.data);

export const ReservationURL = () => {
  return `${Config.BACKEND_ENDPOINT}/reservation/list`;
};

export const ReservationDetailFetcher = (
  url: string,
): Promise<ReservationFullResponse> => request.get(url).then(res => res.data);

export const ReservationDetailURL = (id: number) => {
  return `${Config.BACKEND_ENDPOINT}/reservation/full?id=${id}`;
};

export const ReservationAddUserFetcher = (
  url: string,
): Promise<ReservationAddUserResponse> =>
  request.get(url).then(res => res.data);

export const ReservationAddUserURL = (id: string) => {
  if (!id || id === '') {
    return;
  }
  return `${Config.BACKEND_ENDPOINT}/user?id=${id}`;
};

export const ReservationAddCardFetcher = (
  url: string,
): Promise<ReservationAddCardResponse> =>
  request.get(url).then(res => res.data);

export const ReservationAddCardURL = (id: string) => {
  if (!id || id === '') {
    return;
  }
  return `${Config.BACKEND_ENDPOINT}/card?id=${id}`;
};

export const ReservationAddRoomFetcher = (
  url: string,
): Promise<ReservationAddRoomResponse> =>
  request.get(url).then(res => res.data);

export const ReservationAddRoomURL = (id: number) => {
  if (!id || id === 0) {
    return;
  }
  return `${Config.BACKEND_ENDPOINT}/room?id=${id}`;
};

export const ReservationSelectFetcher = (url: string) =>
  request.get(url).then(res => res.data);

export const ReservationSelectURL = (type: DataType) => {
  return `${Config.BACKEND_ENDPOINT}/${type}/list/reservation`;
};

export const ReservationSearchFetcher = (url: string) => {
  return request.get(url).then(res => res.data);
};
export const ReservationSearchURL = (type: DataType, query: string) => {
  const searchBy = {
    card: 'id',
    user: 'id',
    room: 'address',
  };
  return `${Config.BACKEND_ENDPOINT}/${type}/search?${searchBy[type]}=${query}`;
};
