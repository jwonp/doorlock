import {View, StyleSheet} from 'react-native';

const DataViewContainer = ({children}: {children: React.ReactNode}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3c3c3c',
    padding: '2%',
  },
  itemContainer: {},
});

export default DataViewContainer;
