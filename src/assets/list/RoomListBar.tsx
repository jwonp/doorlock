import {Text, Pressable} from 'react-native';
import {setUser} from '../../redux/features/userState';
import {useAppDispatch} from '../../redux/hooks';
import {UserListResponse} from '../models/dto/user/UserListResponse';
import {listStyles, styles} from './ListBarStlyeSheet';
import {RoomListResponse} from '../models/dto/room/RoomListResponse';

const RoomListBar = ({
  roomData,
  index,
}: {
  roomData: RoomListResponse;
  index: number;
}) => {
  const dispatch = useAppDispatch();

  return (
    <Pressable
      style={listStyles.itemContainer}
      onPress={() => {}}
      onLongPress={() => {
        console.warn(`${index} is long pressed`);
      }}>
      <Text style={styles.text}>{`${roomData.id}`}</Text>
      <Text style={styles.text}>{`${roomData.guestId}`}</Text>
      <Text style={styles.text}>{roomData.isUsed ? 'Reserved' : 'Free'}</Text>
    </Pressable>
  );
};

export default RoomListBar;
