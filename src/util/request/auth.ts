import {request} from './controller/ApiController';
import Config from 'react-native-config';
export const authorizeCard = async (id: string, address: string) => {
  const authorizeData = {
    cardId: id,
    address: address,
  };
  return await request.post(
    `${Config.BACKEND_ENDPOINT}/auth/card`,
    authorizeData,
  );
};
