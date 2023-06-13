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
        <Text style={textStyle.text}>
          {convertFirstTextUpperCase(techTypeKeys[index])}
        </Text>
      </View>
    );
  });
  return (
    <View>
      <View>
        <Text>TechType</Text>
      </View>
      <View style={styles.container}>{techTypeList}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: '2%',
  },
  item: {
    marginRight: '2%',
  },
});
export default TechTypeDataView;
