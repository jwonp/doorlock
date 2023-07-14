import { Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {
  getSelectedReservation,

} from '@/redux/features/reservationState';
import useSWR from 'swr';
import {ReservationListFetcher, ReservationListURL} from '@/swr/reservationSWR';
import {screenStyles} from '@/assets/screen/ScreenStylyeSheet';
import {useMemo} from 'react';

import {RESERVATION} from '@/assets/static/texts/DataTypes';

import ReservationEditModal from '@/components/Modal/Reservation/ReservationEditModal';
import ReservationAddModal from '@/components/Modal/Reservation/ReservationAddModal';

import SelectModal from '@/components/Modal/SelectModal';

import ReservationListBar from '@/assets/list/data/reservation/ReservationListBar';
const ReservationScreen = () => {
  const reservation = useAppSelector(getSelectedReservation);
  const dispatch = useAppDispatch();
  const reservationSWR = useSWR(ReservationListURL, ReservationListFetcher);
  const ListBar = useMemo(() => {
    if (!reservationSWR || !reservationSWR.data) {
      return <Text style={{color: '#ffffff'}}>No Reservation List</Text>;
    }
    return reservationSWR.data.map((item, index) => (
      <ReservationListBar key={index} data={item} />
    ));
  }, [reservationSWR.data]);

  return (
    <View style={screenStyles.container}>
      <SelectModal type={RESERVATION} />
      <ReservationAddModal />
      <ReservationEditModal />
      {ListBar}
    </View>
  );
};

export default ReservationScreen;
