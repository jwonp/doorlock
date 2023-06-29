import {StyleSheet} from 'react-native';
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
    width: '20%',
  },
  address: {
    width: '80%',
  },
});
export const cardBarWidthStyles = StyleSheet.create({
  id: {
    width: '40%',
  },
  reservationId: {
    width: '20%',
  },

  used: {
    width: '15%',
  },
});

export const reservationWithStyles = StyleSheet.create({
  id: {
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
  ischeckedIn: {
    width: '50%',
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
