import {Modal, StyleSheet, View, Text, Pressable, Button} from 'react-native';

import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {
  getSelectModalVisible,
  setSelectModalVisible,
} from '@/redux/features/modalState';
import {getModalType} from '@/redux/features/modalTypeState';
import {SWRResponse} from 'swr';

import {UserListResponse} from '@/assets/models/dto/user/UserListResponse';

import ListContainer from '@/assets/views/data/ListContainer';

import {getSelectedUser} from '@/redux/features/userState';
type SelectModalProps = {
  userListSWR: SWRResponse<UserListResponse[], any, any>;
};
const SelectModal = ({userListSWR}: SelectModalProps) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getSelectedUser);
  const modalVisible = useAppSelector(getSelectModalVisible);
  const modalType = useAppSelector(getModalType);

  return (
    <Modal
      onRequestClose={() => {
        dispatch(setSelectModalVisible(false));
      }}
      transparent={true}
      visible={modalVisible}
      animationType={'slide'}>
      <View style={styles.modal}>
        <View>
          <Text style={styles.text}>Modal</Text>
        </View>
        <Pressable style={styles.container}>
          <ListContainer title={modalType} height={70}>
            <></>
          </ListContainer>
        </Pressable>
        <Button
          onPress={() => {
            dispatch(setSelectModalVisible(false));
          }}
          title={'Cancel'}
          color={'#3c3c3c'}
        />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#ffffff',
    padding: '2%',
    marginTop: 'auto',
    height: '50%',
  },
  container: {
    backgroundColor: '#ffffff',
  },
  text: {
    color: '#000000',
  },
});
export default SelectModal;
