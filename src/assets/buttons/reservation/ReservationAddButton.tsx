import {setReservationAddModalVisible} from '@/redux/features/modalState';
import {useAppDispatch} from '@/redux/hooks';
import {Pressable, Image, StyleSheet} from 'react-native';
import AddIcon from '@/public/add.png';
import {headerButtonStyles} from '../HeaderButtonStyles';

const ReservationAddButton = () => {
  const dispatch = useAppDispatch();

  return (
    <Pressable
      onPress={() => {
        dispatch(setReservationAddModalVisible(true));
      }}>
      <Image style={headerButtonStyles.icon} source={AddIcon} />
    </Pressable>
  );
};

export default ReservationAddButton;
