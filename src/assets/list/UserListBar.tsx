import {Text, StyleSheet, Pressable} from 'react-native';
import {setUser} from '../../redux/features/userState';
import {useAppDispatch} from '../../redux/hooks';
import {UserListResponse} from '../models/dto/user/UserListResponse';
import {listStyles, styles} from './ListBarStlyeSheet';

const UserListBar = ({
  userData,
  index,
}: {
  userData: UserListResponse;
  index: number;
}) => {
  const dispatch = useAppDispatch();

  return (
    <Pressable
      style={listStyles.itemContainer}
      onPress={() => {
        dispatch(setUser(userData));
      }}
      onLongPress={() => {
        console.warn(`${index} is long pressed`);
      }}>
      <Text style={styles.text}>{`${userData.id}`}</Text>
      <Text style={styles.text}>{`${userData.name}`}</Text>
      <Text style={styles.text}>{`${userData.lastTagged}`}</Text>
    </Pressable>
  );
};

export default UserListBar;
