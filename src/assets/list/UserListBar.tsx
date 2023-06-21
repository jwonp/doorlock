import {Text, Pressable} from 'react-native';

import {listStyles, styles, userBarWidthStyles} from './ListBarStyleSheet';
import {UserListBarProps} from './ListBarProps';

const UserListBar = ({data, index, onPress}: UserListBarProps) => {
  return (
    <Pressable
      style={listStyles.itemContainer}
      onPress={onPress}
      onLongPress={() => {
        console.warn(`${index} is long pressed`);
      }}>
      <Text
        style={{...styles.text, ...userBarWidthStyles.id}}>{`${data.id}`}</Text>
      <Text
        style={{...styles.text, ...userBarWidthStyles.name}}>{`${data.name}`}</Text>
      <Text style={{...styles.text, ...userBarWidthStyles.lastTagged}}>{`${
        data.lastTagged ? data.lastTagged : 'Not Tagged'
      }`}</Text>
    </Pressable>
  );
};

export default UserListBar;
