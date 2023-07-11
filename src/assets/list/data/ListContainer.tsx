import {View, StyleSheet, ScrollView} from 'react-native';
import ListBarColumn from '@/assets/list/data/ListBarColumn';
import {DataTypes} from '@/assets/static/texts/DataTypes';

const ListContainer = ({
  title,
  children,
  height,
  backgroundColor,
}: {
  title: DataTypes;
  children: React.ReactNode;
  height: number;
  backgroundColor?: string;
}) => {
  return (
    <View
      style={{
        backgroundColor: backgroundColor ? backgroundColor : '#967E76',
      }}>
      <View style={listStyles.titleContainer}>
        <ListBarColumn type={title} />
      </View>
      <ScrollView
        style={{
          flexDirection: 'column',
          height: `${height}%`,
        }}>
        {children}
      </ScrollView>
    </View>
  );
};

const listStyles = StyleSheet.create({
  titleContainer: {
    padding: '2%',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#EEE3CB',
  },
  itemContainer: {
    padding: '4%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default ListContainer;
