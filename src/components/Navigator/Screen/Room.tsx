import {View, Text, GestureResponderEvent} from 'react-native';
import useSWR, {SWRConfig, useSWRConfig} from 'swr';
import {RoomListFetecher, RoomListURL} from '../../../swr/roomSWR';
import DataViewContainer from '../../../assets/views/data/DataViewContainer';
import DataView from '../../../assets/views/data/DataView';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {
  getSelectedRoom,
  setSelectedRoom,
} from '../../../redux/features/roomState';
import {useEffect, useMemo} from 'react';
import ListContainer from '../../../assets/views/data/ListContainer';
import {ROOM} from '../../../assets/static/texts/DataTypes';
import ListBar from '../../../assets/list/ListBar';
import {screenStyles} from '../../../assets/screen/ScreenStylyeSheet';
import ReservationsView from '../../../assets/views/data/room/ReservationsView';

const RoomScreen = ({navigation}: {navigation: any}) => {
  const room = useAppSelector(getSelectedRoom);
  const dispatch = useAppDispatch();
  const roomListSWR = useSWR(RoomListURL, RoomListFetecher);
  const roomCache = useSWRConfig();
  const RoomListBar = useMemo(() => {
    if (!roomListSWR || !roomListSWR.data) {
      return <Text style={screenStyles.text}>No room list</Text>;
    }

    return roomListSWR.data.map((item, index) => {
      return (
        <ListBar
          key={index}
          type={ROOM}
          data={item}
          index={index}
          onPress={(event: GestureResponderEvent) => {
            dispatch(setSelectedRoom(item));
          }}
        />
      );
    });
  }, [roomListSWR.data]);

  return (
    <View style={screenStyles.container}>
      <DataViewContainer>
        <DataView label={'Room ID'} text={room.id} />
        <DataView label={'Address'} text={room.address} />
        <DataView label={'Reservations'}>
          <ReservationsView roomId={room.id}reservations={room.reservations} />
        </DataView>
      </DataViewContainer>
      <ListContainer title={ROOM} height={64}>
        {RoomListBar}
      </ListContainer>
    </View>
  );
};

export default RoomScreen;
