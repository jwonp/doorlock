import {Pressable, StyleSheet, View, Image} from 'react-native';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {setReservationEditModalVisible} from '@/redux/features/modalState';
import {getSelectedReservation} from '@/redux/features/reservationState';
import {useMemo} from 'react';
import EditIcon from '@/public/edit.png';
import {headerButtonStyles} from '../HeaderButtonStyles';
const ReservationEditButton = () => {
  const dispatch = useAppDispatch();
  const reservation = useAppSelector(getSelectedReservation);
  const EditButton = useMemo(() => {
    if (reservation.id > 0) {
      return (
        <Pressable
          onPress={() => {
            dispatch(setReservationEditModalVisible(true));
          }}>
          <Image style={headerButtonStyles.icon} source={EditIcon} />
        </Pressable>
      );
    }
    return <View></View>;
  }, [reservation]);
  return EditButton;
};

export default ReservationEditButton;
