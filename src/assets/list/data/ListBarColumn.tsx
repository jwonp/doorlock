import {View, Text, StyleSheet} from 'react-native';
import {DataTypes} from '@/assets/static/texts/DataTypes';
import {getListBarColumn} from '@/assets/static/texts/ListBarColumns';
import {
  getBarStyles,
  roomBarWidthStyles,
} from '@/assets/list/data/ListBarStyleSheet';
type ListBarColumnProps = {
  type: DataTypes;
};
const ListBarColumn = ({type}: ListBarColumnProps) => {
  const columns = getListBarColumn(type);
  const columnList = Object.values(columns);
  const widthStyles = Object.values(getBarStyles(type));
  const columnView = columnList.map((item, index) => {
    return (
      <View key={index} style={widthStyles[index]}>
        <Text style={styles.text}>{item}</Text>
      </View>
    );
  });
  return <View style={styles.container}>{columnView}</View>;
};
const styles = StyleSheet.create({
  container: {
    paddingTop: '0.5%',

    paddingLeft: '4%',
    paddingRight: '4%',
    flexDirection: 'row',
  },
  text: {
    color: '#ffffff',
  },
});

export default ListBarColumn;
