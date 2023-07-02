import {View, Text, StyleSheet} from 'react-native';
import {TechType} from '../../../models/types/TechType';
import {styles as textStyle} from '../../../list/ListBarStyleSheet';
import {convertFirstTextUpperCase} from '../../../../util/convertFirstTextUpperCase';
const TechTypeDataView = ({techType}: {techType: TechType}) => {
  const techTypeKeys = Object.keys(techType);
  const techTypesValues = Object.values(techType);
  const techTypeList = techTypesValues.map((isTechTypeTrue, index) => {
    if (isTechTypeTrue === false) {
      return;
    }
    return (
      <View key={index} style={styles.item}>
        <Text style={styles.text}>
          {convertFirstTextUpperCase(techTypeKeys[index])}
        </Text>
      </View>
    );
  });
  return (
    <View style={styles.card}>
      <View style={styles.container}>{techTypeList}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: '1%',
  },
  card: {
    paddingLeft: '2%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
  },
  item: {
    marginRight: '2%',
  },
  text: {
    color: '#3c3c3c',
  },
});
export default TechTypeDataView;
