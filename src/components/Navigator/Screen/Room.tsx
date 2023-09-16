import {View, Text} from 'react-native';
import useSWR from 'swr';
import {RoomListFetecher, RoomListURL} from '@/swr/roomSWR';
import {useEffect, useMemo} from 'react';
import {screenStyles} from '@/assets/screen/ScreenStyleSheet';
import RoomListBar from '@/assets/list/data/room/RoomListBar';
import RoomAddModal from '@/components/Modal/Room/RoomAddModal';
import {ROOM} from '@/assets/static/texts/DataTypes';
import Selectable from '@/assets/list/data/Selectable';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {setRoomDetailModalVisible} from '@/redux/features/modal/modalState';
import RoomDetailModal from '@/components/Modal/Room/RoomDetailModal';
import {setRoomDetail} from '@/redux/features/modal/data/roomDetailState';
import ReservationEditModal from '@/components/Modal/Reservation/ReservationEditModal';
import SelectModal from '@/components/Modal/SelectModal';
import {getToken} from '@/redux/features/tokenState';
import {getScreenType} from '@/redux/features/modal/screenState';

const RoomScreen = ({navigation}: {navigation: any}) => {
  const screen = useAppSelector(getScreenType);
  const jwt = useAppSelector(getToken);
  const roomListSWR = useSWR(RoomListURL, (url: string) =>
    RoomListFetecher(jwt, url),
  );
  const dispatch = useAppDispatch();
  const ListBar = useMemo(() => {
    if (!roomListSWR || !roomListSWR.data) {
      return <Text style={{color: '#ffffff'}}>No Room</Text>;
    }
    return roomListSWR.data.map((item, index) => (
      <Selectable
        key={index}
        id={item.id}
        type={ROOM}
        onLongPress={() => {
          dispatch(setRoomDetail(item));
          dispatch(setRoomDetailModalVisible(true));
        }}>
        <RoomListBar data={item} />
      </Selectable>
    ));
  }, [roomListSWR.data]);
  useEffect(() => {
    roomListSWR.mutate();
  }, [screen]);
  return (
    <View style={screenStyles.container}>
      <RoomAddModal />
      <RoomDetailModal />
      <SelectModal />
      <ReservationEditModal />
      {ListBar}
    </View>
  );
};

export default RoomScreen;
