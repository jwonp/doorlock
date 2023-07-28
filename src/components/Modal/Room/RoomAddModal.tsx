import {
  Text,
  View,
  TextInput,
  Image,
  StyleSheet,
  Modal,
  Pressable,
} from 'react-native';

import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {
  getRoomAddModalVisible,
  setRoomAddModalVisible,
} from '@/redux/features/modal/modalState';
import {modalHeaderStlyes, modalStyles} from '@/assets/modals/ModalStyles';
import CloseIcon from '@/public/close-white.png';
import CheckIcon from '@/public/checked.png';
import {SLIDE} from '@/assets/static/texts/ModalText';
import {addRoom} from '@/util/request/room';
import {RoomListURL, RoomListFetecher} from '@/swr/roomSWR';
import useSWR from 'swr';
const RoomAddModal = () => {
  const roomListSWR = useSWR(RoomListURL, RoomListFetecher);
  const modalVisible = useAppSelector(getRoomAddModalVisible);
  const dispatch = useAppDispatch();
  const [address, setAddress] = useState<string>('');
  const closeModal = () => {
    setAddress('');
    dispatch(setRoomAddModalVisible(false));
  };
  const onPressAddRoom = () => {
    addRoom(address).then(res => roomListSWR.mutate());
    closeModal();
  };
  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      animationType={SLIDE}
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
            <Text style={modalHeaderStlyes.title}>Add Room</Text>
          </View>
          <View style={modalHeaderStlyes.submitContainer}>
            <View style={address.length < 1 && styles.hidden}>
              <Pressable onPress={onPressAddRoom}>
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
                  setAddress(e);
                }}
                style={styles.input}
                placeholder={'Address'}
                inputMode={'text'}
                maxLength={50}
                placeholderTextColor={'grey'}
              />
              <View style={address.length < 1 && styles.hidden}>
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
export default RoomAddModal;
