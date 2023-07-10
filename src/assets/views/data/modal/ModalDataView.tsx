import {View, Text, StyleSheet} from 'react-native';
type ModalDataViewProps = {
  title: string;
  text: string;
};
const ModalDataView = ({title, text}: ModalDataViewProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.card}>
        <Text style={styles.text}>{text ?? ''}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {marginTop: '3%', paddingLeft: '2%'},
  title: {fontSize: 16, color: '#ffffff'},
  card: {
    marginTop: '2%',
    paddingLeft: '4%',
    paddingBottom: '1%',
    backgroundColor: '#ffffff',
    borderRadius: 14,
  },
  text: {fontSize: 14, color: '#ffffff'},
});
export default ModalDataView;
