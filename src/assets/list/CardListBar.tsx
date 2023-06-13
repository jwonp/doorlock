import {Text, Pressable} from 'react-native';

import {useAppDispatch} from '../../redux/hooks';

import {listStyles, styles} from './ListBarStyleSheet';
import {CardListResponse} from '../models/dto/card/CardListResponse';
import {setCard} from '../../redux/features/cardState';

const CardListBar = ({
  cardData,
  index,
}: {
  cardData: CardListResponse;
  index: number;
}) => {
  const dispatch = useAppDispatch();

  return (
    <Pressable
      style={listStyles.itemContainer}
      onPress={() => {
        dispatch(setCard(cardData));
      }}
      onLongPress={() => {
        console.warn(`${index} is long pressed`);
      }}>
      <Text style={styles.text}>{`${cardData.id}`}</Text>
      <Text style={styles.text}>{`${cardData.userId ?? 'No User'}`}</Text>
      <Text style={styles.text}>{`${
        cardData.roomId < 0 ? 'No Room' : cardData.roomId
      }`}</Text>
      <Text style={styles.text}>{cardData.isUsed ? 'Used' : 'Free'}</Text>
    </Pressable>
  );
};

export default CardListBar;

/**
 * user roomid cardid
 * card id
 * room
 */
