import {View, StyleSheet, Text, ScrollView} from 'react-native';

const ListContainer = ({
  title,
  listBars,
}: {
  title: string;
  listBars: React.ReactNode;
}) => {
  return (
    <View>
      <View style={listStyles.titleContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <ScrollView style={listStyles.listScrollView}>{listBars}</ScrollView>
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
    height: '55%',
  },
});
export default ListContainer;
