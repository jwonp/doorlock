import {request} from './controller/ApiController';
import Config from 'react-native-config';
export const authorizeCard = async (id: string) => {
  return await request.get(`${Config.BACKEND_ENDPOINT}/auth/card?id=${id}`);
};
