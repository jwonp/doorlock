import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {
  getNewUserModalVisible,
  setNewUserModalVisible,
} from '../../redux/features/modalState';
import {useState} from 'react';
import {addUser} from '../../util/request/user';
import {UserAddRequest} from '../../assets/models/dto/user/UserAddRequest';
import {AxiosError, AxiosResponse} from 'axios';

const NewUserModal = () => {
  const dispatch = useAppDispatch();
  const [newUserId, setNewUserId] = useState<string>('');
  const [newUserName, setNewUserName] = useState<string>('');
  const [newUserPhone, setNewUserPhone] = useState<string>('');
  const modalVisible = useAppSelector(getNewUserModalVisible);
  return (
    <Modal
      visible={modalVisible}
      onRequestClose={() => {
        dispatch(setNewUserModalVisible(false));
      }}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>New User Regist</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={e => {
              setNewUserId(e);
            }}
            style={styles.input}
            placeholder={'User ID'}
          />
          <TextInput
            onChangeText={e => {
              setNewUserName(e);
            }}
            style={styles.input}
            placeholder={'User Name'}
          />
          <TextInput
            onChangeText={e => {
              setNewUserPhone(e);
            }}
            style={styles.input}
            placeholder={'User Phone'}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              const userData: UserAddRequest = {
                id: newUserId,
                name: newUserName,
                phone: newUserPhone,
              };
              addUser(userData)
                .then(res => {
                  if (res.data === true) {
                    dispatch(setNewUserModalVisible(false));
                  }
                })
                .catch((err: AxiosError) => {});
            }}>
            <Text>Add User</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3c3c3c',
    height: 100,
    flex: 1,
    justifyContent: 'center',
    padding: '5%',
  },
  titleContainer: {
    color: '#ffffff',
    marginBottom: '3%',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
  },
  inputContainer: {
    backgroundColor: '#0c3c3c',
  },
  input: {
    color: '#ffffff',
  },
});
export default NewUserModal;
