import {View, Text, StyleSheet} from 'react-native';

const CardScreen = () => {
  return (
    <View>
      <Text style={styles.text}>CardList</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: '#3c3c3c',
  },
});
export default CardScreen;
