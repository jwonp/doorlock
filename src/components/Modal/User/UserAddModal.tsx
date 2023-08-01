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
} from '@/redux/features/modal/modalState';
import {useState} from 'react';
import {addUser} from '@/util/request/user';
import {UserAddRequest} from '@/assets/models/dto/user/UserRequest';
import {AxiosError} from 'axios';
import CloseIcon from '@/public/close-white.png';
import {modalHeaderStlyes, modalStyles} from '@/assets/modals/ModalStyles';
import CheckIcon from '@/public/checked.png';
import {getPhoneNumber} from '@/util/phoneNumberKeyEvent';
const UserAddModal = () => {
  const dispatch = useAppDispatch();
  const [newUserId, setNewUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const [newUserName, setNewUserName] = useState<string>('');
  const [newUserPhone, setNewUserPhone] = useState<string>('');
  const modalVisible = useAppSelector(getUserAddModalVisible);
  const resetInput = () => {
    setNewUserId('');
    setPassword('');
    setPasswordCheck('');
    setNewUserName('');
    setNewUserPhone('');
  };
  const inputVaild = {
    id: newUserId.length > 0,
    password: password === passwordCheck && password.length >= 8,
    name: newUserName.length > 0,
    phone: newUserPhone.length >= 12,
  };
  const onPressAddCard = () => {
    if (
      newUserId.length === 0 ||
      newUserName.length === 0 ||
      newUserPhone.length === 0
    ) {
      return;
    }
    const userData: UserAddRequest = {
      id: newUserId,
      password: password,
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
  };
  const onClose = () => {
    resetInput();
    dispatch(setUserAddModalVisible(false));
  };
  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      animationType={'slide'}
      onRequestClose={onClose}>
      <View style={modalStyles.container}>
        <View style={modalStyles.header}>
          <View style={modalHeaderStlyes.closeContainer}>
            <Pressable onPress={onClose}>
              <Image source={CloseIcon} style={iconStyles.icon} />
            </Pressable>
          </View>
          <View style={modalHeaderStlyes.titleContainer}>
            <Text style={modalHeaderStlyes.title}>Add User</Text>
          </View>
          <View style={modalHeaderStlyes.submitContainer}>
            <View
              style={
                Object.values(inputVaild).includes(false) && styles.hidden
              }>
              <Pressable onPress={onPressAddCard}>
                <Text style={modalHeaderStlyes.submit}>add</Text>
              </Pressable>
            </View>
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
                autoFocus={true}
                placeholder={'User ID'}
                inputMode={'text'}
                maxLength={30}
                placeholderTextColor={'grey'}
              />
              <View style={newUserId.length < 1 && styles.hidden}>
                <Image style={iconStyles.check} source={CheckIcon} />
              </View>
            </View>
            <View style={styles.inputCard}>
              <TextInput
                onChangeText={e => {
                  setPassword(e);
                }}
                style={styles.input}
                placeholder={'Password at least 8 character'}
                textContentType={'password'}
                inputMode={'text'}
                secureTextEntry={true}
                maxLength={50}
                placeholderTextColor={'grey'}
              />
              <View style={password.length > 7 ? {} : styles.hidden}>
                <Image style={iconStyles.check} source={CheckIcon} />
              </View>
            </View>
            <View style={styles.inputCard}>
              <TextInput
                onChangeText={e => {
                  setPasswordCheck(e);
                }}
                style={styles.input}
                textContentType={'password'}
                placeholder={'Password Check'}
                inputMode={'text'}
                secureTextEntry={true}
                maxLength={50}
                placeholderTextColor={'grey'}
              />
              <View
                style={
                  password === passwordCheck && password.length > 7
                    ? {}
                    : styles.hidden
                }>
                <Image style={iconStyles.check} source={CheckIcon} />
              </View>
            </View>
            <View style={styles.inputCard}>
              <TextInput
                onChangeText={e => {
                  setNewUserName(e);
                }}
                style={styles.input}
                placeholder={'User Name'}
                inputMode={'text'}
                maxLength={50}
                placeholderTextColor={'grey'}
              />
              <View style={newUserName.length < 1 && styles.hidden}>
                <Image style={iconStyles.check} source={CheckIcon} />
              </View>
            </View>
            <View style={styles.inputCard}>
              <TextInput
                onKeyPress={e => {
                  setNewUserPhone(
                    getPhoneNumber(newUserPhone, e.nativeEvent.key),
                  );
                }}
                style={styles.input}
                placeholder={'User Phone'}
                textContentType={'telephoneNumber'}
                inputMode={'tel'}
                keyboardType={'phone-pad'}
                maxLength={13}
                value={newUserPhone}
                placeholderTextColor={'grey'}
              />
              <View style={newUserPhone.length < 12 && styles.hidden}>
                <Image style={iconStyles.check} source={CheckIcon} />
              </View>
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
    paddingRight: '12%',
  },
  input: {
    color: '#000000',
  },
  hidden: {
    display: 'none',
  },
});
const iconStyles = StyleSheet.create({
  icon: {width: 24, height: 24},
  check: {
    position: 'absolute',
    right: -30,
    bottom: 12,
    width: 24,
    height: 24,
  },
});
export default UserAddModal;
