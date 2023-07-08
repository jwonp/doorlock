import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs';
import {NavigationHelpers, ParamListBase} from '@react-navigation/native';
import {View, Image, Text, StyleSheet, Pressable} from 'react-native';

import CardIcon from '@/public/card.png';
import CardWhiteIcon from '@/public/card-white.png';
import UserIcon from '@/public/user.png';
import UserWhiteIcon from '@/public/user-white.png';
import RoomIcon from '@/public/room.png';
import RoomWhiteIcon from '@/public/room-white.png';
import ReservationIcon from '@/public/reservation.png';
import ReservationWhiteIcon from '@/public/reservation-white.png';
import ScanIcon from '@/public/scan.png';
import ScanWhiteIcon from '@/public/scan-white.png';
type ButtomTabButtonProps = {
  name: string;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
};
type ButtonImage = {
  black: any;
  white: any;
};
type ButtonIcon = {
  user: ButtonImage;
  room: ButtonImage;
  card: ButtonImage;
  scan: ButtonImage;
  reservation: ButtonImage;
};
const BottomTabButton = ({name, navigation}: ButtomTabButtonProps) => {
  const icons: ButtonIcon = {
    user: {
      black: UserIcon,
      white: UserWhiteIcon,
    },
    room: {
      black: RoomIcon,
      white: RoomWhiteIcon,
    },
    card: {
      black: CardIcon,
      white: CardWhiteIcon,
    },
    scan: {
      black: ScanIcon,
      white: ScanWhiteIcon,
    },
    reservation: {
      black: ReservationIcon,
      white: ReservationWhiteIcon,
    },
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.navigate(name);
        }}>
        <View style={styles.image}>
          <Image style={styles.icon} source={icons[name].black} />
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '20%',
    paddingTop: '2%',
    paddingBottom: '2%',
  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '2%',
    marginBottom: '2%',
  },

  icon: {width: 27, height: 27},
});

export default BottomTabButton;
