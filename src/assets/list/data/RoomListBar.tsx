import {Text, Pressable} from 'react-native';

import {
  listStyles,
  styles,
  roomBarWidthStyles,
} from '@/assets/list/data/ListBarStyleSheet';
import {RoomListBarProps} from '@/assets/list/data/ListBarProps';

const RoomListBar = ({data, onPress, onLongPress}: RoomListBarProps) => {
  return (
    <Pressable
      style={listStyles.itemContainer}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Text style={{...styles.text, ...roomBarWidthStyles.id}}>
        {`${data.id}`}
      </Text>
      <Text style={{...styles.text, ...roomBarWidthStyles.address}}>
        {`${data.address}`}
      </Text>
    </Pressable>
  );
};

export default RoomListBar;