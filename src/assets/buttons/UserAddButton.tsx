import {Pressable, StyleSheet, Image, View} from 'react-native';
import {setNewUserModalVisible} from '@/redux/features/modalState';
import {useAppDispatch} from '@/redux/hooks';
import UserAddIcon from '@/public/user-add.png';
const UserAddButton = () => {
  const dispatach = useAppDispatch();
  return (
    <Pressable
      onPress={() => {
        dispatach(setNewUserModalVisible(true));
      }}>
      <View style={{marginRight: '9%'}}>
        <Image style={styles.icon} source={UserAddIcon} />
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  icon: {width: 27, height: 27},
});
export default UserAddButton;
