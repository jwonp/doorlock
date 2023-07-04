import {setReservationAddModalVisible} from '@/redux/features/modalState';
import {useAppDispatch} from '@/redux/hooks';
import {Button} from 'react-native';

const ReservationAddButton = () => {
  const dispatch = useAppDispatch();

  return (
    <Button
      title={'Add'}
      color={'#3c3c3c'}
      onPress={() => {
        dispatch(setReservationAddModalVisible(true));
      }}></Button>
  );
};

export default ReservationAddButton;
