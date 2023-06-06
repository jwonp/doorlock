import {Text, StyleSheet, Pressable} from 'react-native';

import {
  UserDataState,
  UserState,
  setUser,
  setUserId,
  setUserName,
} from '../redux/features/userState';
import {useState} from 'react';

import {useAppDispatch} from '../redux/hooks';
import {UserListResponse} from './models/dto/user/UserListResponse';

const ListBar = ({
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
const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
  },
});
const listStyles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#3c3c3c',
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    padding: '4%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default ListBar;
