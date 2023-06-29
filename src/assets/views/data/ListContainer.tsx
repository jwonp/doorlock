import {View, StyleSheet, Text, ScrollView} from 'react-native';

const ListContainer = ({
  title,
  children,
  height,
}: {
  title: string;
  children: React.ReactNode;
  height: number;
}) => {
  return (
    <View>
      <View style={listStyles.titleContainer}>
        <Text style={styles.text}>{title}</Text>
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
  titleContainer: {padding: '2%'},
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
