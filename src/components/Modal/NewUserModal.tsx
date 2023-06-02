import {TextInput, View, Text, StyleSheet, Modal, Button} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {
  getNewUserModalVisible,
  setNewUserModalVisible,
} from '../../redux/features/modalState';
import {useState} from 'react';

type NewUser = {
  userId: string;
  userName: string;
};
const NewUserModal = () => {
  const dispatch = useAppDispatch();
  const [newUserId, setNewUserId] = useState<string>('');
  const [newUserName, setNewUserName] = useState<string>('');
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
        </View>
        <View>
          <Button
            onPress={() => {
              console.warn(`${newUserId} and ${newUserName}`);
              dispatch(setNewUserModalVisible(false));
            }}
            title={'Add User'}
          />
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
