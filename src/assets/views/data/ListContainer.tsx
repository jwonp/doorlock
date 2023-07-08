import {View, StyleSheet, ScrollView} from 'react-native';
import ListBarColumn from '@/assets/list/data/ListBarColumn';
import {DataTypes} from '@/assets/static/texts/DataTypes';

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
    color: '#000000',
  },
});
const listStyles = StyleSheet.create({
  titleContainer: {
    padding: '2%',
    backgroundColor: '#9BABB8',
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
    backgroundColor: '#9BABB8',
    flexDirection: 'column',
  },
});
export default ListContainer;
