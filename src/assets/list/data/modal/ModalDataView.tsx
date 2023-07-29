import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  NativeSyntheticEvent,
} from 'react-native';
type ModalDataViewProps = {
  title: string;
  text: string;
  isEditable?: boolean;
  onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
};
const ModalDataView = ({
  title,
  text,
  isEditable,
  onChange,
}: ModalDataViewProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.card}>
        {isEditable ? (
          <TextInput style={styles.input} onChange={onChange}>
            {text ?? ''}
          </TextInput>
        ) : (
          <Text style={styles.text}>{text ?? ''}</Text>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {marginTop: '1%', paddingLeft: '2%'},
  title: {fontSize: 16, color: '#ffffff'},
  card: {
    marginTop: '2%',
    paddingLeft: '4%',
    paddingBottom: '1%',
    backgroundColor: '#ffffff',
    borderRadius: 14,
  },
  input: {
    fontSize: 14,
    color: '#000000',
    padding: 0,
    height: 20,
    lineHeight: 20,
  },
  text: {fontSize: 14, color: '#000000', height: 20, lineHeight: 20},
});
export default ModalDataView;
