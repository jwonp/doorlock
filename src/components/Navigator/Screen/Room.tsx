import {View, Text} from 'react-native';
import useSWR from 'swr';
import {RoomListFetecher, RoomListURL} from '@/swr/roomSWR';
import {useMemo} from 'react';
import {screenStyles} from '@/assets/screen/ScreenStyleSheet';
import RoomListBar from '@/assets/list/data/room/RoomListBar';
import RoomAddModal from '@/components/Modal/Room/RoomAddModal';
import {ROOM} from '@/assets/static/texts/DataTypes';
import Selectable from '@/assets/list/data/Selectable';

const RoomScreen = ({navigation}: {navigation: any}) => {
  const roomListSWR = useSWR(RoomListURL, RoomListFetecher);
  const ListBar = useMemo(() => {
    if (!roomListSWR || !roomListSWR.data) {
      return <Text style={{color: '#ffffff'}}>No Room</Text>;
    }
    return roomListSWR.data.map((item, index) => (
      <Selectable key={index} id={item.id} type={ROOM}>
        <RoomListBar data={item} />
      </Selectable>
    ));
  }, [roomListSWR.data]);

  return (
    <View style={screenStyles.container}>
      <RoomAddModal />
      {ListBar}
    </View>
  );
};

export default RoomScreen;
