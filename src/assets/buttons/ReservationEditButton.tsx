import {Button, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {setReservationEditModalVisible} from '../../redux/features/modalState';
import {getSelectedReservation} from '../../redux/features/reservationState';
import {useMemo} from 'react';

const ReservationEditButton = () => {
  const dispatach = useAppDispatch();
  const reservation = useAppSelector(getSelectedReservation);
  const EditButton = useMemo(() => {
    if (reservation.id > 0) {
      return (
        <Button
          title={'Edit'}
          color={'#3c3c3c'}
          onPress={() => {
            dispatach(setReservationEditModalVisible(true));
          }}></Button>
      );
    }
    return <View></View>;
  }, [reservation]);
  return EditButton;
};

export default ReservationEditButton;
