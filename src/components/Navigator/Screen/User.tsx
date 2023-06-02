import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import ListBar from '../../../assets/ListBar';
import {useAppSelector} from '../../../redux/hooks';
import {getSelectedUser, getUserList} from '../../../redux/features/userState';

import NewUserModal from '../../Modal/NewUserModal';

const UserScreen = ({route}: {route: any}) => {
  const userList = useAppSelector(getUserList);
  const user = useAppSelector(getSelectedUser);

  return (
    <View style={styles.container}>
      <NewUserModal />
      <View style={dataStyles.dataContainer}>
        <View style={dataStyles.itemContainer}>
          <Text>User ID</Text>
          <TextInput
            style={styles.whiteText}
            value={user.id}
            editable={false}
          />
        </View>
        <View style={dataStyles.itemContainer}>
          <Text>User Name</Text>
          <TextInput style={styles.whiteText} value={user.name} />
        </View>
        <View style={dataStyles.itemContainer}>
          <Text>Private Key</Text>
          <TextInput
            style={styles.whiteText}
            value={user.privateKey}
            editable={false}
          />
        </View>
        <View style={dataStyles.itemContainer}>
          <Text>Last Tagged</Text>
          <TextInput
            style={styles.whiteText}
            value={user.lastTagged}
            editable={false}
          />
        </View>
      </View>
      <View style={listStyles.listContainer}>
        <View style={listStyles.titleContainer}>
          <Text style={styles.text}>List</Text>
        </View>
        <ScrollView style={listStyles.listScrollView}>
          {userList.map((item, index) => {
            return <ListBar userData={item} index={index} />;
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
