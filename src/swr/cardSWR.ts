import Config from 'react-native-config';
import {CardWithReservationResponse} from '../assets/models/dto/card/CardWithReservationResponse';
import {request} from '../util/request/controller/ApiController';
export const CardListFetcher = (
  url: string,
): Promise<CardWithReservationResponse[]> =>
  request.get(url).then(res => res.data);

export const CardListURL = () => {
  return `${Config.BACKEND_ENDPOINT}/card/list/reservation`;
};
