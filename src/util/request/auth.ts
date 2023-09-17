import axios from 'axios';

import Config from 'react-native-config';
export const authorizeCard = async (id: string, address: string) => {
  const authorizeData = {
    cardId: id,
    address: address,
  };
  return await axios.post(
    `${Config.BACKEND_ENDPOINT}/auth/card`,
    authorizeData,
  );
};
