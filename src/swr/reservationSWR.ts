import Config from "react-native-config";
import { request } from "../util/request/controller/ApiController";
import { Reservation } from "../assets/models/entity/Reservation";

export const ReservationListFetcher = (url: string): Promise<Reservation[]> =>
  request.get(url).then(res => res.data);

export const ReservationListURL = () => {
  return `${Config.BACKEND_ENDPOINT}/reservation/list`;
};