import {StyleSheet} from 'react-native';

export const listBarStyles = StyleSheet.create({
  container: {
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '2%',
    paddingTop: '1%',
    marginBottom: '1%',
    backgroundColor: '#EEE3CB',
    borderRadius: 14,
  },
  titleCard: {
    marginBottom: '1.5%',
  },
  titleText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    borderBottomWidth: 1.5,
    borderBottomColor: '#967E76',
  },
  detailText: {
    color: '#000000',
    textAlign: 'left',
    lineHeight: 24,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
