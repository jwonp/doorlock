import {Image, Text, View} from 'react-native';
import {Pressable} from 'react-native';
import DeleteIcon from '@/public/trash-can-white.png';
import {headerButtonStyles} from './HeaderButtonStyles';
import {DataTypes} from '../static/texts/DataTypes';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {
  getSelectedCards,
  resetCardSelected,
} from '@/redux/features/selected/cardState';
import {
  getSelectedRooms,
  resetRoomSelected,
} from '@/redux/features/selected/roomState';

import {CardListFetcher, CardListURL} from '@/swr/cardSWR';
import useSWR from 'swr';
import {RoomListURL, RoomListFetecher} from '@/swr/roomSWR';
import {
  getSelectedReservations,
  resetReservationSelected,
} from '@/redux/features/selected/reservationState';
import {ReservationFetcher, ReservationURL} from '@/swr/reservationSWR';
import {
  getSelectedUsers,
  resetUserSelected,
} from '@/redux/features/selected/userState';
import {UserListFetcher, UserListURL} from '@/swr/userSWR';

import { deleteSelected } from '@/util/getDeleteSelecteds';
import { getToken } from '@/redux/features/tokenState';

type DeleteButtonProps = {
  type: DataTypes;
};

const DeleteButton = ({type}: DeleteButtonProps) => {
  const dispatch = useAppDispatch();
  const jwt = useAppSelector(getToken);
  const selected = {
    card: useAppSelector(getSelectedCards),
    room: useAppSelector(getSelectedRooms),
    user: useAppSelector(getSelectedUsers),
    reservation: useAppSelector(getSelectedReservations),
  };
  const resetSelected = {
    card: resetCardSelected,
    room: resetRoomSelected,
    user: resetUserSelected,
    reservation: resetReservationSelected,
  };
  const dataSWR = {
    card: useSWR(CardListURL, (url:string)=>CardListFetcher(jwt,url)),
    room: useSWR(RoomListURL, (url:string)=>RoomListFetecher(jwt,url)),
    user: useSWR(UserListURL, (url:string)=>UserListFetcher(jwt,url)),
    reservation: useSWR(ReservationURL, (url:string)=>ReservationFetcher(jwt,url)),
  };

  return (
    <Pressable
      style={{display: selected[type].length > 0 ? 'flex' : 'none'}}
      onPress={() => {
        deleteSelected(jwt,type, selected[type]).then(() => {
          dataSWR[type].mutate();
        });
        dispatch(resetSelected[type]());
      }}>
      <View style={headerButtonStyles.marginRight}>
        <Image style={headerButtonStyles.icon} source={DeleteIcon} />
        <Text
          style={{
            position: 'absolute',
            bottom: -5,
            left: 23,
            fontWeight: 'bold',
            fontSize: 11,
            zIndex: 20,
            color: '#ffffff',
          }}>
          {selected[type].length}
        </Text>
      </View>
    </Pressable>
  );
};

export default DeleteButton;
