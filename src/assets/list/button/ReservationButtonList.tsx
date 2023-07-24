import {View} from 'react-native';
import {buttonListStyles} from './ButtonListStyles';
import DeleteButton from '@/assets/buttons/DeleteButton';
import {RESERVATION} from '@/assets/static/texts/DataTypes';
import ModalOpenButton from '@/assets/buttons/ModalOpenButton';
import ReservationAddIcon from '@/public/reservation-add-white.png';
import {setReservationAddModalVisible} from '@/redux/features/modal/modalState';
import { useAppDispatch } from '@/redux/hooks';
import { setSelectModalAction } from '@/redux/features/modal/selectModalState';
import { ADD } from '@/assets/static/texts/SelectModalActions';
const ReservationButtonList = () => {
  const dispatch = useAppDispatch();
  return (
    <View style={buttonListStyles.container}>
      <View>
        <DeleteButton type={RESERVATION} />
      </View>
      <View style={buttonListStyles.card}>
        <ModalOpenButton
          onPress={()=>{
            dispatch(setSelectModalAction(ADD))
          }}
          setModalVisible={setReservationAddModalVisible}
          iconSource={ReservationAddIcon}
        />
      </View>
    </View>
  );
};

export default ReservationButtonList;
