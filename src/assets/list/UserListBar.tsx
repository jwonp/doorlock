import {Text, StyleSheet, Pressable} from 'react-native';
import {setUser} from '../../redux/features/userState';
import {useAppDispatch} from '../../redux/hooks';
import {UserListResponse} from '../models/dto/user/UserListResponse';
import {listStyles, styles} from './ListBarStyleSheet';
import {UserListBarProps} from './ListBarProps';

const UserListBar = ({data, index, onPress}: UserListBarProps) => {
  return (
    <Pressable
      style={listStyles.itemContainer}
      onPress={onPress}
      onLongPress={() => {
        console.warn(`${index} is long pressed`);
      }}>
      <Text style={styles.text}>{`${data.id}`}</Text>
      <Text style={styles.text}>{`${data.name}`}</Text>
      <Text style={styles.text}>{`${
        data.lastTagged ? data.lastTagged : 'Not Tagged'
      }`}</Text>
    </Pressable>
  );
};

export default UserListBar;
