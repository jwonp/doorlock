import Config from "react-native-config";
import { request } from "../util/request/controller/ApiController";
import { RoomDataState } from "../redux/features/roomState";

export const RoomListFetecher = (url: string): Promise<RoomDataState> =>
  request.get(url).then(res => res.data);

export const RoomListURL = () => {
  return `${Config.BACKEND_ENDPOINT}/room/list`;
};

//cards users reservations