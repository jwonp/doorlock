import ModalOpenButton from '@/assets/buttons/ModalOpenButton';
import DeleteButton from '@/assets/buttons/DeleteButton';
import {setUserAddModalVisible} from '@/redux/features/modal/modalState';
import {View} from 'react-native';
import {buttonListStyles} from './ButtonListStyles';
import UserAddIcon from '@/public/user-add.png';
import {USER} from '@/assets/static/texts/DataTypes';
const UserButtonList = () => {
  return (
    <View style={buttonListStyles.container}>
      <View>
        <DeleteButton type={USER} />
      </View>
      <View style={buttonListStyles.card}>
        <ModalOpenButton
          setModalVisible={setUserAddModalVisible}
          iconSource={UserAddIcon}
        />
      </View>
    </View>
  );
};

export default UserButtonList;
