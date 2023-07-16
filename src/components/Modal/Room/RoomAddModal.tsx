import {SLIDE} from '@/assets/static/texts/ModalText';
import {
  getRoomAddModalVisible,
  setRoomAddModalVisible,
} from '@/redux/features/modalState';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import ModalScreen from '../ModalScreen';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native';
import {useState} from 'react';

const RoomAddModal = () => {
  const [address, setAddress] = useState<string>();
  return (
    <ModalScreen
      getModalVisible={getRoomAddModalVisible}
      setModalVisible={setRoomAddModalVisible}
      title={'New Room'}
      state={address}>
      <View>
        <Text style={{color: '#ffffff'}}>{address}</Text>
        <TextInput
          style={{backgroundColor: '#00aaff'}}
          onChangeText={e => {
            setAddress(e);
          }}
        />
      </View>
    </ModalScreen>
  );
};

export default RoomAddModal;
