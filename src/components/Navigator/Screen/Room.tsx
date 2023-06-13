import {View, Text, StyleSheet} from 'react-native';

const RoomScreen = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <Text style={styles.text}>Room</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: '#3c3c3c',
  },
});

export default RoomScreen;
