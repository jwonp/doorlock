import {View, StyleSheet} from 'react-native';

const DataViewContainer = ({children}: {children: React.ReactNode}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#967E76',
    padding: '2%',
  },
});

export default DataViewContainer;
