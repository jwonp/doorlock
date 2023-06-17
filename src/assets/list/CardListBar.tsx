import {Text, Pressable, GestureResponderEvent} from 'react-native';

import {useAppDispatch} from '../../redux/hooks';

import {listStyles, styles} from './ListBarStyleSheet';

import {useEffect} from 'react';
import {CardListBarProps} from './ListBarProps';

const CardListBar = ({data, index, onPress}: CardListBarProps) => {
  return (
    <Pressable
      style={listStyles.itemContainer}
      onPress={onPress}
      onLongPress={() => {
        console.warn(`${index} is long pressed`);
      }}>
      <Text style={styles.text}>{`${data.id}`}</Text>
      <Text style={styles.text}>{`${
        data.userId.length === 0 ? 'No User' : data.userId
      }`}</Text>
      <Text style={styles.text}>{`${
        data.roomId < 0 ? 'No Room' : data.roomId
      }`}</Text>
      <Text style={styles.text}>{data.used ? 'Used' : 'Free'}</Text>
    </Pressable>
  );
};

export default CardListBar;

/**
 * user roomid cardid
 * card id
 * room
 */
