import {Children, ReactNode, ReactPropTypes} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
type DataView = {
  label: string;
  text?: string;
  children?: ReactNode;
};
const DataView = ({label, text, children}: DataView) => {
  return (
    <View style={styles.dataContainer}>
      <Text style={styles.title}>{label}</Text>
      {text ? <Text style={styles.whiteText}>{text}</Text> : <></>}
      {children ? <View>{children}</View> : <></>}
    </View>
  );
};
const styles = StyleSheet.create({
  dataContainer: {
    backgroundColor: '#3c3c3c',
    padding: '2%',
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: '1%',
  },
  whiteText: {
    paddingLeft: '3%',
    color: '#ffffff',
  },
});
export default DataView;
