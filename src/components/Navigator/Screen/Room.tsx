import {View, Text, StyleSheet} from 'react-native';
import useSWR from 'swr'
import { RoomListFetecher, RoomListURL } from '../../../swr/roomSWR';
const RoomScreen = ({navigation}: {navigation: any}) => {
  const roomListSWR = useSWR(RoomListURL,RoomListFetecher);
  return (
    <View>
      <Text style={styles.text}>Room</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: '#3c3c3c',
  },
});

export default RoomScreen;
