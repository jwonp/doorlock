import {Text, Pressable} from 'react-native';

import {listStyles, styles, roomBarWidthStyles} from './ListBarStyleSheet';
import {RoomListBarProps} from './ListBarProps';

const RoomListBar = ({data, index, onPress}: RoomListBarProps) => {
  return (
    <Pressable
      style={listStyles.itemContainer}
      onPress={onPress}
      onLongPress={() => {
        console.warn(`${index} is long pressed`);
      }}>
      <Text
        style={{...styles.text, ...roomBarWidthStyles.id}}>{`${data.id}`}</Text>
      {/* <Text
        style={{
          ...styles.text,
          ...roomBarWidthStyles.guestId,
        }}>{`${data.guestId}`}</Text> */}
      <Text style={{...styles.text, ...roomBarWidthStyles.used}}>
        {data.isUsed ? 'Reserved' : 'Free'}
      </Text>
    </Pressable>
  );
};

export default RoomListBar;
