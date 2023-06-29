import {Text, Pressable} from 'react-native';

import {listStyles, styles, cardBarWidthStyles} from './ListBarStyleSheet';

import {CardListBarProps} from './ListBarProps';

const CardListBar = ({data, onPress, onLongPress}: CardListBarProps) => {
  return (
    <Pressable
      style={listStyles.itemContainer}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Text
        style={{...styles.text, ...cardBarWidthStyles.id}}>{`${data.id}`}</Text>

      <Text style={{...styles.text, ...cardBarWidthStyles.reservationId}}>
        {data.reservationId ? data.reservationId : ''}
      </Text>
      <Text style={{...styles.text, ...cardBarWidthStyles.used}}>
        {data.reservationId ? 'Used' : 'Free'}
      </Text>
    </Pressable>
  );
};

export default CardListBar;
