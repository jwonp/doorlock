import {TagEvent} from 'react-native-nfc-manager';
import {CardAddRequest} from '@/assets/models/dto/card/CardRequest';
import {request} from '@/util/request/controller/ApiController';
import {CardAddResponse} from '@/assets/models/dto/card/CardResponse';
import {AxiosResponse} from 'axios';

export const addCard = async (
  jwt: string,
  tag: TagEvent,
): Promise<AxiosResponse<CardAddResponse, any>> => {
  if (!tag.id || !tag.maxSize || !tag.techTypes || !tag.type) {
    return;
  }

  const parsedtechTypes = tag.techTypes.map(techType => {
    return techType.split('.')[3];
  });

  const newCard: CardAddRequest = {
    id: tag.id,
    maxSize: tag.maxSize,
    techTypes: parsedtechTypes,
    type: tag.type,
  };
  return await request(jwt).post('/card', newCard);
};

export const deleteSelectedCards = async (
  jwt: string,
  selectedCardIDList: string[],
) => {
  if (!selectedCardIDList || selectedCardIDList.length < 1) {
    return;
  }
  const cardListToDelete = {
    idList: selectedCardIDList,
  };
  return await request(jwt).delete('/card', {data: cardListToDelete});
};
