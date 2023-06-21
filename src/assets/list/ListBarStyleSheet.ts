import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
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
    width: '35%',
  },
  guestId: {
    width: '35%',
  },
  used: {
    width: '30%',
  },
});
export const cardBarWidthStyles = StyleSheet.create({
  id: {
    width: '40%',
  },
  userId: {
    width: '20%',
  },
  roomId: {
    width: '20%',
  },
  used: {
    width: '10%',
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
