import {Text, StyleSheet, Pressable} from 'react-native';

import {UserState, setUser, user} from '../redux/features/userState';
import {useState} from 'react';

import {useAppDispatch} from '../redux/hooks';

const ListBar = ({index}: {index: number}) => {
  const dispatch = useAppDispatch();
  const [userData, setUserData] = useState<UserState>({
    id: `User ID${index}`,
    name: `User Name${index}`,
    privateKey: `Private Key${index}`,
    lastTagged: `Last Tagged${index}`,
  });
  return (
    <Pressablez
      style={listStyles.itemContainer}
      onPress={() => {
        dispatch(setUser(userData));

        console.warn(`${index} is pressed ${userData.id}`);
      }}
      onLongPress={() => {
        console.warn(`${index} is long pressed`);
      }}>
      <Text style={styles.text}>{`${userData.id}`}</Text>
      <Text style={styles.text}>{`${userData.name}`}</Text>
      <Text style={styles.text}>{`${userData.privateKey}`}</Text>
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
