import {setRoomAddModalVisible} from '@/redux/features/modalState';
import {useAppDispatch} from '@/redux/hooks';
import {Image, Pressable, View} from 'react-native';
import {headerButtonStyles} from '../HeaderButtonStyles';
import AddButton from '../AddButton';
import RoomAddIcon from '@/public/room-add-white.png';
const RoomAddButton = () => {
  return (
    <AddButton
      setModalVisible={setRoomAddModalVisible}
      iconSource={RoomAddIcon}
    />
  );
};

export default RoomAddButton;
