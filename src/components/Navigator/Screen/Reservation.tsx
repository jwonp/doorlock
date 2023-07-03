import {GestureResponderEvent, Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {
  getSelectedReservation,
  setSelectedReservation,
} from '@/redux/features/reservationState';
import useSWR from 'swr';
import {
  ReservationListFetcher,
  ReservationListURL,
} from '@/swr/reservationSWR';
import {screenStyles} from '@/assets/screen/ScreenStylyeSheet';
import {useMemo} from 'react';
import ListBar from '@/assets/list/data/ListBar';
import {RESERVATION} from '@/assets/static/texts/DataTypes';
import ListContainer from '@/assets/views/data/ListContainer';
import DataViewContainer from '@/assets/views/data/DataViewContainer';
import DataView from '@/assets/views/data/DataView';
import ReservationEditModal from '@/components/Modal/Reservation/ReservationEditModal';
const ReservationScreen = () => {
  const reservation = useAppSelector(getSelectedReservation);
  const dispatch = useAppDispatch();
  const reservationSWR = useSWR(ReservationListURL, ReservationListFetcher);
  const ReservationList = useMemo(() => {
    if (!reservationSWR || !reservationSWR.data) {
      return <Text style={screenStyles.text}>No Reservation List</Text>;
    }

    return reservationSWR.data.map((item, index) => {
      return (
        <ListBar
          key={index}
          data={item}
          type={RESERVATION}
          onPress={(event: GestureResponderEvent) => {
            dispatch(setSelectedReservation(item));
          }}
        />
      );
    });
  }, [reservationSWR.data]);

  return (
    <View style={screenStyles.container}>
      <ReservationEditModal />
      <DataViewContainer>
        <DataView label={'Reservation ID'} text={reservation.id}></DataView>
        <DataView label={'User ID'} text={reservation.userId} />
        <DataView label={'Card ID'} text={reservation.cardId} />
        <DataView label={'Room ID'} text={reservation.roomId} />
        <DataView
          label={'Check In'}
          text={reservation.isCheckedIn ? 'Checked In' : 'Not Checked In'}
        />
      </DataViewContainer>
      <ListContainer title={RESERVATION} height={46}>
        {ReservationList}
      </ListContainer>
    </View>
  );
};

export default ReservationScreen;
