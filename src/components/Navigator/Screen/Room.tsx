import {View, Text, GestureResponderEvent} from 'react-native';
import useSWR from 'swr';
import {RoomListFetecher, RoomListURL} from '@/swr/roomSWR';
import DataViewContainer from '@/assets/list/data/DataViewContainer';
import DataView from '@/assets/list/data/DataView';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {getSelectedRoom, setSelectedRoom} from '@/redux/features/roomState';
import {useMemo} from 'react';
import ListContainer from '@/assets/list/data/ListContainer';
import {ROOM} from '@/assets/static/texts/DataTypes';

import {screenStyles} from '@/assets/screen/ScreenStylyeSheet';
import ReservationsView from '@/assets/list/data/room/ReservationsView';
import RoomListBar from '@/assets/list/data/room/RoomListBar';

const RoomScreen = ({navigation}: {navigation: any}) => {
  const room = useAppSelector(getSelectedRoom);
  const dispatch = useAppDispatch();
  const roomListSWR = useSWR(RoomListURL, RoomListFetecher);

  const ListBar = useMemo(() => {
    if (!roomListSWR || !roomListSWR.data) {
      return <Text style={{color: '#ffffff'}}>No room list</Text>;
    }
    return roomListSWR.data.map((item, index) => (
      <RoomListBar key={index} data={item} />
    ));
  }, [roomListSWR.data]);

  return <View style={screenStyles.container}>{ListBar}</View>;
};

export default RoomScreen;
