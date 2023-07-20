import {DataType} from '@/redux/features/modal/screenState';
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
type SelectableListBarProps = {
  id: string | number;
  type: DataType;
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
  const selected = {
    card: useAppSelector(getSelectedCards),
    room: useAppSelector(getSelectedRooms),
    reservation: useAppSelector(getSelectedReservations),
  };
  const delelteSelected = {
    card: deleteCardSelected,
    room: deleteRoomSelected,
    reservation: deleteReservationSelected,
  };
  const addSelected = {
    card: addCardSelected,
    room: addRoomSelected,
    reservation: addReservationSelected,
  };
  const isSelected = selected[type].includes(id);
  return (
    <Pressable
      onPress={() => {
        isSelected
          ? dispatch(delelteSelected[type](id))
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
