import {StyleSheet} from 'react-native';
export const modalStyles = StyleSheet.create({
  container: {
    backgroundColor: '#967E76',
    height: '100%',
  },
  header: {
    height: 70,
    padding: '3%',
    paddingTop: '5%',
  },
  main: {
    height: '100%',
    padding: '5%',
    paddingTop: 0,
  },
});
export const modalHeaderStlyes = StyleSheet.create({
  closeContainer: {
    position: 'absolute',
    top: 20,
    left: 15,
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
    fontSize: 20,
  },
  submitContainer: {
    position: 'absolute',
    top: 18,
    right: 20,
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
