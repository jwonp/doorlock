import {View, TextInput, StyleSheet, Text} from 'react-native';
type DataView = {
  label: string;
  value: string;
  editable: boolean;
};
const DataView = ({label, value, editable}: DataView) => {
  return (
    <View>
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

  whiteText: {
    color: '#ffffff',
  },
});
export default DataView;
