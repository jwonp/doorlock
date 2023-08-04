import {request} from './controller/ApiController';
import Config from 'react-native-config';
export const checkAdminCard = async (id: string) => {
  return await request.get(`${Config.BACKEND_ENDPOINT}/auth/admin?id=${id}`);
};
