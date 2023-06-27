import {Text, Pressable} from 'react-native';

import {listStyles, styles, userBarWidthStyles} from './ListBarStyleSheet';
import {UserListBarProps} from './ListBarProps';

const UserListBar = ({data, onPress, onLongPress}: UserListBarProps) => {
  return (
    <Pressable
      style={listStyles.itemContainer}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Text
        style={{...styles.text, ...userBarWidthStyles.id}}>{`${data.id}`}</Text>
      <Text
        style={{
          ...styles.text,
          ...userBarWidthStyles.name,
        }}>{`${data.name}`}</Text>
      <Text style={{...styles.text, ...userBarWidthStyles.lastTagged}}>{`${
        data.lastTagged ? data.lastTagged : 'Not Tagged'
      }`}</Text>
    </Pressable>
  );
};

export default UserListBar;
