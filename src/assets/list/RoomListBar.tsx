import {Text, Pressable} from 'react-native';

import {listStyles, styles, roomBarWidthStyles} from './ListBarStyleSheet';
import {RoomListBarProps} from './ListBarProps';

const RoomListBar = ({data, onPress, onLongPress}: RoomListBarProps) => {
  return (
    <Pressable
      style={listStyles.itemContainer}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Text
        style={{...styles.text, ...roomBarWidthStyles.id}}>{`${data.id}`}</Text>

    </Pressable>
  );
};

export default RoomListBar;
