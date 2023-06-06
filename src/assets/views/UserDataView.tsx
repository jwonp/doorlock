import {View, TextInput, StyleSheet, Text} from 'react-native';
type UserDataView = {
  label: string;
  value: string;
  editable: boolean;
};
const UserDataView = ({label, value, editable}: UserDataView) => {
  return (
    <View style={styles.itemContainer}>
      <Text>{label}</Text>
      <TextInput style={styles.whiteText} value={value} editable={editable} />
    </View>
  );
};
const styles = StyleSheet.create({
  dataContainer: {
    backgroundColor: '#3c3c3c',
    padding: '2%',
  },
  itemContainer: {},
  whiteText: {
    color: '#ffffff',
  },
});
export default UserDataView;
