import {headerButtonStyles} from '@/assets/buttons/HeaderButtonStyles';
import {View} from 'react-native';
import {buttonListStyles} from './ButtonListStyles';
import DeleteButton from '@/assets/buttons/DeleteButton';
import {CARD} from '@/assets/static/texts/DataTypes';
import ModalOpenButton from '@/assets/buttons/ModalOpenButton';
import {setCardAddModalVisibie} from '@/redux/features/modal/modalState';
import CardAddIcon from '@/public/card-add-white.png';
const CardButtonList = () => {
  return (
    <View style={buttonListStyles.container}>
      <View>
        <DeleteButton type={CARD} />
      </View>
      <View style={buttonListStyles.card}>
        <ModalOpenButton
          setModalVisible={setCardAddModalVisibie}
          iconSource={CardAddIcon}
        />
      </View>
    </View>
  );
};

export default CardButtonList;
