import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  Image,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {
  getUserAddModalVisible,
  setUserAddModalVisible,
} from '@/redux/features/modalState';
import {useState} from 'react';
import {addUser} from '@/util/request/user';
import {UserAddRequest} from '@/assets/models/dto/user/UserAddRequest';
import {AxiosError} from 'axios';
import CloseIcon from '@/public/close-white.png';
import {modalHeaderStlyes, modalStyles} from '../ModalStyles';
const UserAddModal = () => {
  const dispatch = useAppDispatch();
  const [newUserId, setNewUserId] = useState<string>('');
  const [newUserName, setNewUserName] = useState<string>('');
  const [newUserPhone, setNewUserPhone] = useState<string>('');
  const modalVisible = useAppSelector(getUserAddModalVisible);
  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      animationType={'slide'}
      onRequestClose={() => {
        dispatch(setUserAddModalVisible(false));
      }}>
      <View style={modalStyles.container}>
        <View style={modalStyles.header}>
          <View style={modalHeaderStlyes.iconContainer}>
            <Pressable
              onPress={() => {
                dispatch(setUserAddModalVisible(false));
              }}>
              <Image source={CloseIcon} style={iconStyles.icon} />
            </Pressable>
          </View>
          <View style={modalHeaderStlyes.titleContainer}>
            <Text style={modalHeaderStlyes.title}>Add User</Text>
          </View>
          <View style={modalHeaderStlyes.submitContainer}>
            <Pressable
              onPress={() => {
                if (
                  newUserId.length === 0 ||
                  newUserName.length === 0 ||
                  newUserPhone.length === 0
                ) {
                  return;
                }
                const userData: UserAddRequest = {
                  id: newUserId,
                  name: newUserName,
                  phone: newUserPhone,
                };
                addUser(userData)
                  .then(res => {
                    if (res.data === true) {
                      dispatch(setUserAddModalVisible(false));
                    }
                  })
                  .catch((err: AxiosError) => {});
              }}>
              <Text style={modalHeaderStlyes.submit}>add</Text>
            </Pressable>
          </View>
        </View>
        <View style={modalStyles.main}>
          <View style={styles.inputContainer}>
            <View style={styles.inputCard}>
              <TextInput
                onChangeText={e => {
                  setNewUserId(e);
                }}
                style={styles.input}
                placeholder={'User ID'}
                placeholderTextColor={'grey'}
              />
            </View>
            <View style={styles.inputCard}>
              <TextInput
                onChangeText={e => {
                  setNewUserName(e);
                }}
                style={styles.input}
                placeholder={'User Name'}
                placeholderTextColor={'grey'}
              />
            </View>
            <View style={styles.inputCard}>
              <TextInput
                onChangeText={e => {
                  setNewUserPhone(e);
                }}
                style={styles.input}
                placeholder={'User Phone'}
                placeholderTextColor={'grey'}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {marginTop: 'auto', marginBottom: 'auto'},
  inputCard: {
    backgroundColor: '#EEE3CB',
    borderRadius: 10,
    marginBottom: '5%',
    paddingLeft: '5%',
  },
  input: {
    color: '#000000',
  },
});
const iconStyles = StyleSheet.create({
  icon: {width: 24, height: 24},
});
export default UserAddModal;
