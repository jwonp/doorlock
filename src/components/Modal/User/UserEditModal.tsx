import {modalHeaderStlyes, modalStyles} from '@/assets/modals/ModalStyles';
import {SLIDE} from '@/assets/static/texts/ModalText';
import {
  getUserEditModalVisible,
  setUserEditModalVisible,
} from '@/redux/features/modal/modalState';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';

import {Modal, View, Text, Pressable, Image, StyleSheet} from 'react-native';
import CloseIcon from '@/public/close-white.png';
import ModalDataContainer from '@/assets/list/data/modal/ModalDataContainer';
import ModalDataView from '@/assets/list/data/modal/ModalDataView';
import {
  UserEditState,
  getUserEdit,
  initialUserEditState,
  resetPassword,
  setName,
  setPassword,
  setPhone,
} from '@/redux/features/modal/data/userEditState';
import {getLastTaggedDisplayText} from '@/util/convertDisplayText';
import {useState} from 'react';
import {UserPatchRequest} from '@/assets/models/dto/user/UserRequest';
import {modifyUser} from '@/util/request/user';
import {AxiosError} from 'axios';
import {getPhoneNumber} from '@/util/phoneNumberKeyEvent';
const UserEditModal = () => {
  const modalVisible = useAppSelector(getUserEditModalVisible);
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUserEdit);
  const [preUser, setPreUser] = useState<UserEditState>();
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const closeModal = () => {
    setPasswordCheck('');
    setPreUser(initialUserEditState);
    dispatch(resetPassword());
    dispatch(setUserEditModalVisible(false));
  };
  const isPasswordValid =
    user.password && (user.password.length === 0 || user.password.length > 7);
  const isPasswordCheckValid =
    isPasswordValid && user.password === passwordCheck;
  const isChanged =
    isPasswordCheckValid ||
    preUser.name !== user.name ||
    preUser.phone !== user.phone;

  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      animationType={SLIDE}
      onShow={() => {
        setPreUser(user);
      }}
      onRequestClose={() => {
        closeModal();
      }}>
      <View style={modalStyles.container}>
        <View style={modalStyles.header}>
          <View style={modalHeaderStlyes.closeContainer}>
            <Pressable
              onPress={() => {
                closeModal();
              }}>
              <Image source={CloseIcon} style={modalHeaderStlyes.icon} />
            </Pressable>
          </View>
          <View style={modalHeaderStlyes.titleContainer}>
            <Text style={modalHeaderStlyes.title}>Edit User</Text>
          </View>
          <View style={modalHeaderStlyes.submitContainer}>
            <Pressable
              style={!isChanged && styles.hidden}
              onPress={() => {
                const userModified: UserPatchRequest = {};
                modifyUser(userModified)
                  .then(() => {
                    closeModal();
                  })
                  .catch((err: AxiosError) => {});
              }}>
              <Text style={modalHeaderStlyes.submit}>Edit</Text>
            </Pressable>
          </View>
        </View>
        <View style={modalStyles.main}>
          <ModalDataContainer>
            <ModalDataView title={'ID'} text={user.id} />
            <ModalDataView
              title={'Password'}
              text={user.password ?? ''}
              isEditable={true}
              isValid={isPasswordValid}
              textInputProps={{
                placeholder: 'Password at least 8 character',
                textContentType: 'password',
                inputMode: 'text',
                secureTextEntry: true,
                maxLength: 50,
                placeholderTextColor: 'grey',
                onChangeText: e => {
                  dispatch(setPassword(e));
                },
              }}
            />
            <ModalDataView
              title={'Password Check'}
              text={passwordCheck}
              isEditable={true}
              isValid={isPasswordCheckValid}
              textInputProps={{
                textContentType: 'password',
                placeholder: 'Password Check',
                inputMode: 'text',
                secureTextEntry: true,
                maxLength: 50,
                placeholderTextColor: 'grey',
                onChangeText: e => {
                  setPasswordCheck(e);
                },
              }}
            />

            <ModalDataView
              title={'Name'}
              text={user.name}
              isEditable={true}
              textInputProps={{
                spellCheck: false,
                autoCorrect: false,
                onChangeText: e => {
                  dispatch(setName(e));
                },
              }}
            />
            <ModalDataView
              title={'Phone'}
              text={user.phone}
              isEditable={true}
              textInputProps={{
                spellCheck: false,
                autoCorrect: false,
                textContentType: 'telephoneNumber',
                inputMode: 'tel',
                keyboardType: 'phone-pad',
                maxLength: 13,
                onKeyPress: e => {
                  dispatch(
                    setPhone(getPhoneNumber(user.phone, e.nativeEvent.key)),
                  );
                },
              }}
            />

            <ModalDataView
              title={'Last Tagged'}
              text={getLastTaggedDisplayText(user.id, user.lastTagged)}
            />
          </ModalDataContainer>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  hidden: {
    display: 'none',
  },
});
export default UserEditModal;
