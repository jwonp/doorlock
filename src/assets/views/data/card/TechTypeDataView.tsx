import {View, Text, StyleSheet} from 'react-native';
import {TechType} from '../../../models/types/TechType';
import {convertFirstTextUpperCase} from '../../../../util/convertFirstTextUpperCase';
const TechTypeDataView = ({techType}: {techType: TechType}) => {
  const techTypeKeys = Object.keys(techType);
  const techTypesValues = Object.values(techType);
  const techTypeList = techType ? (
    techTypesValues.map((isTechTypeTrue, index) => {
      return (
        <View key={index} style={isTechTypeTrue && styles.item}>
          <Text style={styles.text}>
            {isTechTypeTrue && convertFirstTextUpperCase(techTypeKeys[index])}
          </Text>
        </View>
      );
    })
  ) : (
    <></>
  );

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
    marginRight: '1%',
  },
  text: {
    color: '#3c3c3c',
  },
});
export default TechTypeDataView;
