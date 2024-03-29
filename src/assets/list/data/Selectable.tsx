import {
  addCardSelected,
  deleteCardSelected,
  getSelectedCards,
} from '@/redux/features/selected/cardState';
import {
  addReservationSelected,
  deleteReservationSelected,
  getSelectedReservations,
} from '@/redux/features/selected/reservationState';
import {
  addRoomSelected,
  deleteRoomSelected,
  getSelectedRooms,
} from '@/redux/features/selected/roomState';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {Pressable, View, Image, GestureResponderEvent} from 'react-native';
import CheckedIcon from '@/public/checked.png';
import {
  addUserSelected,
  deleteUserSelected,
  getSelectedUsers,
} from '@/redux/features/selected/userState';
import {ActionCreatorWithOptionalPayload} from '@reduxjs/toolkit';
import {DataTypes} from '@/assets/static/texts/DataTypes';
type Selected = {
  [index in DataTypes]: any[];
};
type DeleteSelected = {
  [index in DataTypes]: ActionCreatorWithOptionalPayload<any, string>;
};
type AddSelected = {
  [index in DataTypes]: ActionCreatorWithOptionalPayload<any, string>;
};
type SelectableListBarProps = {
  id: any;
  type: DataTypes;
  children: React.ReactNode;
  onLongPress?: (event: GestureResponderEvent) => void;
};
const Selectable = ({
  id,
  type,
  children,
  onLongPress,
}: SelectableListBarProps) => {
  const dispatch = useAppDispatch();
  const selected: Omit<Selected, 'tag' | 'log'> = {
    card: useAppSelector(getSelectedCards),
    user: useAppSelector(getSelectedUsers),
    room: useAppSelector(getSelectedRooms),
    reservation: useAppSelector(getSelectedReservations),
  };
  const deleteSelected: Omit<DeleteSelected, 'tag' | 'log'> = {
    card: deleteCardSelected,
    user: deleteUserSelected,
    room: deleteRoomSelected,
    reservation: deleteReservationSelected,
  };
  const addSelected: Omit<AddSelected, 'tag' | 'log'> = {
    card: addCardSelected,
    user: addUserSelected,
    room: addRoomSelected,
    reservation: addReservationSelected,
  };

  const isSelected = selected[type].includes(id);
  return (
    <Pressable
      onPress={() => {
        isSelected
          ? dispatch(deleteSelected[type](id))
          : dispatch(addSelected[type](id));
      }}
      onLongPress={onLongPress}>
      <View>{children}</View>
      <View
        style={{
          position: 'absolute',
          right: 15,
          top: 3,
          display: isSelected ? 'flex' : 'none',
        }}>
        <Image style={{width: 25, height: 25}} source={CheckedIcon} />
      </View>
    </Pressable>
  );
};
export default Selectable;
