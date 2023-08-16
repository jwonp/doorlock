import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs';
import {NavigationHelpers, ParamListBase} from '@react-navigation/native';
import {View, Image, StyleSheet, Pressable} from 'react-native';

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
import LogIcon from '@/public/log.png';
import LogWhiteIcon from '@/public/log-white.png';
import {useAppDispatch} from '@/redux/hooks';
import {resetCardSelected} from '@/redux/features/selected/cardState';
import {resetRoomSelected} from '@/redux/features/selected/roomState';
import {resetReservationSelected} from '@/redux/features/selected/reservationState';
import {DataTypes, ROOM, TAG} from '../static/texts/DataTypes';
import {setScreen} from '@/redux/features/modal/screenState';
import {
  setSelectModalAction,
  setSelectedModalType,
} from '@/redux/features/modal/selectModalState';
import {setSelectModalVisible} from '@/redux/features/modal/modalState';

type History = {
  type: 'route';
  key: string;
};
type ButtomTabButtonProps = {
  name: DataTypes;
  history: History[];
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
  tag: ButtonImage;
  log: ButtonImage;
  reservation: ButtonImage;
};
const BottomTabButton = ({name, history, navigation}: ButtomTabButtonProps) => {
  const dispatch = useAppDispatch();
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
    tag: {
      black: ScanIcon,
      white: ScanWhiteIcon,
    },
    log: {
      black: LogIcon,
      white: LogWhiteIcon,
    },
    reservation: {
      black: ReservationIcon,
      white: ReservationWhiteIcon,
    },
  };
  const resetSelected = {
    card: resetCardSelected,
    room: resetRoomSelected,
    reservation: resetReservationSelected,
  };

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        dispatch(setScreen(name));
        if (resetSelected[name]) {
          dispatch(resetSelected[name]());
        }
        if (name === TAG) {
          dispatch(setSelectModalVisible(true));
          dispatch(setSelectedModalType(ROOM));
          dispatch(setSelectModalAction(TAG));
        }
        navigation.navigate(name);
      }}>
      <View style={styles.image}>
        <Image
          style={styles.icon}
          source={
            history[history.length - 1].key.startsWith(name)
              ? icons[name].white
              : icons[name].black
          }
        />
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '16%',
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
