import Config from 'react-native-config';
import {CardWithReservationResponse} from '@/assets/models/dto/card/CardResponse';
import {request} from '@/util/request/controller/ApiController';
export const CardListFetcher = (
  jwt:string,url: string,
): Promise<CardWithReservationResponse[]> =>
  request(jwt).get(url).then(res => res.data);

export const CardListURL = () => {
  return `${Config.BACKEND_ENDPOINT}/card/list/reservation`;
};
