import DeleteButton from '@/assets/buttons/DeleteButton';
import {ROOM} from '@/assets/static/texts/DataTypes';
import {View} from 'react-native';
import {buttonListStyles} from './ButtonListStyles';
import ModalOpenButton from '@/assets/buttons/ModalOpenButton';
import {setRoomAddModalVisible} from '@/redux/features/modal/modalState';
import RoomAddIcon from '@/public/room-add-white.png';
const RoomButtonList = () => {
  return (
    <View style={buttonListStyles.container}>
      <View>
        <DeleteButton type={ROOM} />
      </View>
      <View style={buttonListStyles.card}>
        <ModalOpenButton
          setModalVisible={setRoomAddModalVisible}
          iconSource={RoomAddIcon}
        />
      </View>
    </View>
  );
};

export default RoomButtonList;
