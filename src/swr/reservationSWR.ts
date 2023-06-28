import Config from "react-native-config";
import { request } from "../util/request/controller/ApiController";

export const ReservationListFetcher = (url: string): Promise<any> =>
  request.get(url).then(res => res.data);

export const ReservationListURL = () => {
  return `${Config.BACKEND_ENDPOINT}/reservation`;
};