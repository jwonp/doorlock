import {ReactNode} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {getDisplayText} from '@/util/convertDisplayText';
type DataView = {
  label: string;
  text?: string | number;
  children?: ReactNode;
};
const DataView = ({label, text, children}: DataView) => {
  const displayText = getDisplayText(text);

  return (
    <View style={styles.dataContainer}>
      <Text style={styles.title}>{label}</Text>

      {children ? (
        children
      ) : (
        <View style={styles.card}>
          <Text style={styles.text}>{displayText}</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  dataContainer: {
    backgroundColor: '#967E76',
    padding: '2%',
  },

  title: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: '1%',
  },
  card: {
    paddingLeft: '2%',
    paddingBottom: '1%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
  },
  text: {
    paddingLeft: '1%',
    color: '#000000',
  },
});
export default DataView;
