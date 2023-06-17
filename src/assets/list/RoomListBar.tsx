import {Text, Pressable} from 'react-native';
import {useAppDispatch} from '../../redux/hooks';
import {listStyles, styles} from './ListBarStyleSheet';
import {RoomListBarProps} from './ListBarProps';

const RoomListBar = ({data, index, onPress}: RoomListBarProps) => {
  return (
    <Pressable
      style={listStyles.itemContainer}
      onPress={onPress}
      onLongPress={() => {
        console.warn(`${index} is long pressed`);
      }}>
      <Text style={styles.text}>{`${data.id}`}</Text>
      <Text style={styles.text}>{`${data.guestId}`}</Text>
      <Text style={styles.text}>{data.isUsed ? 'Reserved' : 'Free'}</Text>
    </Pressable>
  );
};

export default RoomListBar;
