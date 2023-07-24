import {Text, View} from 'react-native';
import useSWR from 'swr';
import {ReservationFetcher, ReservationURL} from '@/swr/reservationSWR';
import {screenStyles} from '@/assets/screen/ScreenStyleSheet';
import {useEffect, useMemo} from 'react';
import {RESERVATION} from '@/assets/static/texts/DataTypes';
import ReservationEditModal from '@/components/Modal/Reservation/ReservationEditModal';
import ReservationAddModal from '@/components/Modal/Reservation/ReservationAddModal';
import SelectModal from '@/components/Modal/SelectModal';
import ReservationListBar from '@/assets/list/data/reservation/ReservationListBar';
import Selectable from '@/assets/list/data/Selectable';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {setReservationEditId} from '@/redux/features/modal/data/reservationEditState';
import {
  getSelectModalVisible,
  setReservationEditModalVisible,
} from '@/redux/features/modal/modalState';
import {setSelectModalAction} from '@/redux/features/modal/selectModalState';
import {EDIT} from '@/assets/static/texts/SelectModalActions';

const ReservationScreen = () => {
  const dispatch = useAppDispatch();
  const selectModalVisible = useAppSelector(getSelectModalVisible);
  const reservationSWR = useSWR(ReservationURL, ReservationFetcher);
  const ListBar = useMemo(() => {
    if (!reservationSWR || !reservationSWR.data) {
      return <Text style={{color: '#ffffff'}}>No Reservation</Text>;
    }
    return reservationSWR.data.map((item, index) => (
      <Selectable
        key={index}
        id={item.id}
        type={RESERVATION}
        onLongPress={() => {
          dispatch(setSelectModalAction(EDIT));
          dispatch(setReservationEditModalVisible(true));
          dispatch(setReservationEditId(item.id));
        }}>
        <ReservationListBar data={item} />
      </Selectable>
    ));
  }, [reservationSWR.data]);
  useEffect(() => {
    reservationSWR.mutate();
  }, [selectModalVisible]);
  return (
    <View style={screenStyles.container}>
      <SelectModal />
      <ReservationAddModal />
      <ReservationEditModal />
      {ListBar}
    </View>
  );
};

export default ReservationScreen;
