import {Text, Pressable} from 'react-native';

import {listStyles, styles, cardBarWidthStyles} from './ListBarStyleSheet';

import {CardListBarProps} from './ListBarProps';

const CardListBar = ({data, index, onPress}: CardListBarProps) => {
  return (
    <Pressable
      style={listStyles.itemContainer}
      onPress={onPress}
      onLongPress={() => {
        console.warn(`${index} is long pressed`);
      }}>
      <Text
        style={{...styles.text, ...cardBarWidthStyles.id}}>{`${data.id}`}</Text>

      <Text style={{...styles.text, ...cardBarWidthStyles.used}}>
        {data.used ? 'Used' : 'Free'}
      </Text>
    </Pressable>
  );
};

export default CardListBar;

/**
 * user roomid cardid
 * card id
 * room
 */
