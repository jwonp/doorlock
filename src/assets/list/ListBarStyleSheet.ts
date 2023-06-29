import {StyleSheet} from 'react-native';
import {
  CARD,
  DataTypes,
  RESERVATION,
  ROOM,
  USER,
} from '../static/texts/DataTypes';
export const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
  },
  right: {
    textAlign: 'right',
  },
});
export const userBarWidthStyles = StyleSheet.create({
  id: {
    width: '35%',
  },
  name: {
    width: '35%',
  },
  lastTagged: {
    width: '30%',
  },
});
export const roomBarWidthStyles = StyleSheet.create({
  id: {
    width: '40%',
  },
  address: {
    width: '60%',
  },
});
export const cardBarWidthStyles = StyleSheet.create({
  id: {
    width: '45%',
  },
  reservationId: {
    width: '35%',
  },

  used: {
    width: '20%',
  },
});

export const reservationWithStyles = StyleSheet.create({
  id: {
    width: '50%',
  },
  isCheckedIn: {
    width: '50%',
  },
  userId: {
    width: '20%',
  },
  roomId: {
    width: '20%',
  },
  cardId: {
    width: '20%',
  },
});
export const listStyles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#3c3c3c',
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
    padding: '4%',

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const getBarStyles = (type: DataTypes) => {
  if (type === CARD) {
    return cardBarWidthStyles;
  }
  if (type === USER) {
    return userBarWidthStyles;
  }
  if (type === ROOM) {
    return roomBarWidthStyles;
  }
  if (type === RESERVATION) {
    return reservationWithStyles;
  }
};
