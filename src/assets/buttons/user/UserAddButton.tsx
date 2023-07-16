import {Pressable, StyleSheet, Image, View} from 'react-native';
import {setUserAddModalVisible} from '@/redux/features/modalState';
import {useAppDispatch} from '@/redux/hooks';
import UserAddIcon from '@/public/user-add.png';
import {headerButtonStyles} from '../HeaderButtonStyles';
const UserAddButton = () => {
  const dispatach = useAppDispatch();
  return (
    <Pressable
      onPress={() => {
        dispatach(setUserAddModalVisible(true));
      }}>
      <View style={headerButtonStyles.marginRight}>
        <Image style={headerButtonStyles.icon} source={UserAddIcon} />
      </View>
    </Pressable>
  );
};
export default UserAddButton;
