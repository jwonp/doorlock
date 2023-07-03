import Config from 'react-native-config';
import {request} from '@/util/request/controller/ApiController';
import {Reservation} from '@/assets/models/entity/Reservation';
import {ReservationFullResponse} from '@/assets/models/dto/reservation/ReservationFullResponse';

export const ReservationListFetcher = (url: string): Promise<Reservation[]> =>
  request.get(url).then(res => res.data);

export const ReservationListURL = () => {
  return `${Config.BACKEND_ENDPOINT}/reservation/list`;
};

export const ReservationDetailFetcher = (
  url: string,
): Promise<ReservationFullResponse> => request.get(url).then(res => res.data);

export const ReservationDetailURL = (id: number) => {
  return `${Config.BACKEND_ENDPOINT}/reservation/full?id=${id}`;
};
