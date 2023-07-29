import {StyleSheet} from 'react-native';
export const modalStyles = StyleSheet.create({
  container: {
    backgroundColor: '#967E76',
    height: '100%',
    padding: '5%',
  },
  header: {
    height: 55,
  },
  main: {
    height: '95%',
  },
});
export const modalHeaderStlyes = StyleSheet.create({
  closeContainer: {
    position: 'absolute',
    zIndex: 10,
  },
  icon: {width: 24, height: 24},
  titleContainer: {
    marginBottom: '3%',
    width: '100%',
  },
  title: {
    color: '#ffffff',
    fontWeight: 'bold',
    lineHeight: 23,
    textAlign: 'center',
    fontSize: 18,
  },
  submitContainer: {
    position: 'absolute',
    right: 0,
    zIndex: 10,
  },
  submit: {
    fontSize: 18,
    color: '#EEE3CB',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  hidden: {
    display: 'none',
  },
});
