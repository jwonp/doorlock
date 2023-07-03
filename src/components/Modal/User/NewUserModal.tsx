import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {
  getNewUserModalVisible,
  setNewUserModalVisible,
} from '@/redux/features/modalState';
import {useState} from 'react';
import {addUser} from '@/util/request/user';
import {UserAddRequest} from '@/assets/models/dto/user/UserAddRequest';
import {AxiosError} from 'axios';

const NewUserModal = () => {
  const dispatch = useAppDispatch();
  const [newUserId, setNewUserId] = useState<string>('');
  const [newUserName, setNewUserName] = useState<string>('');
  const [newUserPhone, setNewUserPhone] = useState<string>('');
  const modalVisible = useAppSelector(getNewUserModalVisible);
  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      animationType={'slide'}
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
        <View style={styles.submitContainer}>
          <TouchableOpacity
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
                    dispatch(setNewUserModalVisible(false));
                  }
                })
                .catch((err: AxiosError) => {});
            }}>
            <Text style={styles.submit}>Add User</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(setNewUserModalVisible(false));
            }}>
            <Text style={styles.submit}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3c3c3c',
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
  submitContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: '2%',
  },
  submit: {
    fontSize: 18,
    textAlign: 'center',
  },
});
export default NewUserModal;
