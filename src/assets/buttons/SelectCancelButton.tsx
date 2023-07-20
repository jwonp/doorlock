import {Image, Pressable, StyleSheet, View} from 'react-native';

import BackIcon from '@/public/back-white.png';
import {headerButtonStyles} from './HeaderButtonStyles';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {getScreenType} from '@/redux/features/modal/screenState';
import {
  getSelectedCards,
  resetCardSelected,
} from '@/redux/features/selected/cardState';
import {
  getSelectedRooms,
  resetRoomSelected,
} from '@/redux/features/selected/roomState';
import {
  getSelectedReservations,
  resetReservationSelected,
} from '@/redux/features/selected/reservationState';
const SelectCancelButton = () => {
  const modalType = useAppSelector(getScreenType);
  const dispatch = useAppDispatch();
  const selecedType = {
    card: useAppSelector(getSelectedCards),
    room: useAppSelector(getSelectedRooms),
    reservation: useAppSelector(getSelectedReservations),
  };
  const reset = {
    card: resetCardSelected,
    room: resetRoomSelected,
    reservation: resetReservationSelected,
  };
  const getSelected = (): string[] | number[] => {
    if (!selecedType[modalType]) {
      return [];
    }
    return selecedType[modalType];
  };
  const selected: string[] | number[] = getSelected();
  return (
    <View style={selected.length < 1 && styles.hidden}>
      <Pressable
        onPress={() => {
          dispatch(reset[modalType]());
        }}>
        <View style={headerButtonStyles.marginLeft}>
          <Image style={headerButtonStyles.iconSmall} source={BackIcon} />
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  hidden: {
    display: 'none',
  },
});
export default SelectCancelButton;
