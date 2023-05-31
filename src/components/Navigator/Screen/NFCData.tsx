import {View, Text, StyleSheet} from 'react-native';

const NFCDataScreen = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <Text style={styles.text}>NFCDataScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: '#3c3c3c',
  },
});

export default NFCDataScreen;
