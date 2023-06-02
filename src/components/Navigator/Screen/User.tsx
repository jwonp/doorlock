import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import ListBar from '../../../assets/ListBar';
import {useAppSelector} from '../../../redux/hooks';
import {getUser} from '../../../redux/features/userState';

const UserScreen = ({route}: {route: any}) => {
  const TEMP_LISTBAR = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const user = useAppSelector(getUser);
  return (
    <View style={styles.container}>
      <View style={dataStyles.dataContainer}>
        <View style={dataStyles.itemContainer}>
          <Text>{user.id}</Text>
          <TextInput style={styles.whiteText} value={user.id} />
        </View>
        <View style={dataStyles.itemContainer}>
          <Text>User Name</Text>
          <TextInput style={styles.whiteText} value={user.name} />
        </View>
        <View style={dataStyles.itemContainer}>
          <Text>Private Key</Text>
          <TextInput style={styles.whiteText} value={user.privateKey} />
        </View>
        <View style={dataStyles.itemContainer}>
          <Text>Last Tagged</Text>
          <TextInput style={styles.whiteText} value={user.lastTagged} />
        </View>
      </View>
      <View style={listStyles.listContainer}>
        <View style={listStyles.titleContainer}>
          <Text style={styles.text}>List</Text>
        </View>
        <ScrollView style={listStyles.listScrollView}>
          {TEMP_LISTBAR.map(index => {
            return <ListBar index={index} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {padding: '3%'},
  whiteText: {
    color: '#ffffff',
  },
  text: {
    color: '#3c3c3c',
  },
});
const dataStyles = StyleSheet.create({
  dataContainer: {
    backgroundColor: '#3c3c3c',
    padding: '2%',
  },
  itemContainer: {},
});
const listStyles = StyleSheet.create({
  listContainer: {},
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
export default UserScreen;
