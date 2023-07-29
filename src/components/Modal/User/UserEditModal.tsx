import {modalHeaderStlyes, modalStyles} from '@/assets/modals/ModalStyles';
import {SLIDE} from '@/assets/static/texts/ModalText';
import {
  getUserEditModalVisible,
  setUserAddModalVisible,
  setUserEditModalVisible,
} from '@/redux/features/modal/modalState';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';

import {Modal, View, Text, Pressable, Image} from 'react-native';
import CloseIcon from '@/public/close-white.png';
import ModalDataContainer from '@/assets/list/data/modal/ModalDataContainer';
import ModalDataView from '@/assets/list/data/modal/ModalDataView';
import {getUserEdit} from '@/redux/features/modal/data/userEditState';
import {getLastTaggedDisplayText} from '@/util/convertDisplayText';
const UserEditModal = () => {
  const modalVisible = useAppSelector(getUserEditModalVisible);
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUserEdit);
  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      animationType={SLIDE}
      onRequestClose={() => {
        dispatch(setUserAddModalVisible(false));
      }}>
      <View style={modalStyles.container}>
        <View style={modalStyles.header}>
          <View style={modalHeaderStlyes.closeContainer}>
            <Pressable
              onPress={() => {
                dispatch(setUserEditModalVisible(false));
              }}>
              <Image source={CloseIcon} style={modalHeaderStlyes.icon} />
            </Pressable>
          </View>
          <View style={modalHeaderStlyes.titleContainer}>
            <Text style={modalHeaderStlyes.title}>Edit User</Text>
          </View>
          <View style={modalHeaderStlyes.submitContainer}>
            <Pressable onPress={() => {}}>
              <Text style={modalHeaderStlyes.submit}>Edit</Text>
            </Pressable>
          </View>
        </View>
        <View style={modalStyles.main}>
          <ModalDataContainer>
            <ModalDataView title={'ID'} text={user.id}></ModalDataView>
            {user.password && (
              <ModalDataView
                title={'Password'}
                text={user.password}
                isEditable={true}
                onChange={()=>{}}></ModalDataView>
            )}
            <ModalDataView
              title={'Name'}
              text={user.name}
              isEditable={true}></ModalDataView>
            <ModalDataView
              title={'Phone'}
              text={user.phone}
              isEditable={true}></ModalDataView>
            <ModalDataView
              title={'Last Tagged'}
              text={getLastTaggedDisplayText(
                user.id,
                user.lastTagged,
              )}></ModalDataView>
          </ModalDataContainer>
        </View>
      </View>
    </Modal>
  );
};

export default UserEditModal;
