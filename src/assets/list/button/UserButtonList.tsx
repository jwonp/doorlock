import ModalOpenButton from '@/assets/buttons/ModalOpenButton';
import DeleteButton from '@/assets/buttons/DeleteButton';
import {ROOM, USER} from '@/assets/static/texts/DataTypes';
import {setRoomAddModalVisible} from '@/redux/features/modal/modalState';
import {View} from 'react-native';
import {buttonListStyles} from './ButtonListStyles';
import UserAddIcon from '@/public/user-add.png';
const UserButtonList = () => {
  return (
    <View style={buttonListStyles.container}>
      <View style={buttonListStyles.card}>
        <ModalOpenButton
          setModalVisible={setRoomAddModalVisible}
          iconSource={UserAddIcon}
        />
      </View>
    </View>
  );
};

export default UserButtonList;
