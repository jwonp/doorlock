import {View, StyleSheet, Text, ScrollView} from 'react-native';
import ListBarColumn from '../../list/ListBarColumn';
import {CARD, DataTypes} from '../../static/texts/DataTypes';

const ListContainer = ({
  title,
  children,
  height,
}: {
  title: DataTypes;
  children: React.ReactNode;
  height: number;
}) => {
  return (
    <View>
      <View style={listStyles.titleContainer}>
        <ListBarColumn type={title} />
      </View>
      <ScrollView style={{...listStyles.listScrollView, height: `${height}%`}}>
        {children}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: '#3c3c3c',
  },
});
const listStyles = StyleSheet.create({
  titleContainer: {
    padding: '2%',
    backgroundColor: '#3c3c3c',
    borderTopWidth: 1,
    borderBottomWidth: 2,
    borderColor: '#ffffff',
  },
  itemContainer: {
    padding: '4%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listScrollView: {
    backgroundColor: '#3c3c3c',
    flexDirection: 'column',
  },
});
export default ListContainer;
