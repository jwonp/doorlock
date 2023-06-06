import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ListBar from '../../../assets/ListBar';
import {useAppSelector} from '../../../redux/hooks';
import {getSelectedUser} from '../../../redux/features/userState';

import NewUserModal from '../../Modal/NewUserModal';
import useSWR from 'swr';
import {UserListFetcher, UserListURL} from '../../../swr/userSWR';
import {useEffect, useMemo} from 'react';
import {getNewUserModalVisible} from '../../../redux/features/modalState';
import Config from 'react-native-config';
import UserDataView from '../../../assets/views/UserDataView';
const UserScreen = ({route}: {route: any}) => {
  // const userList = useAppSelector(getUserList);
  const modalVisible = useAppSelector(getNewUserModalVisible);
  const user = useAppSelector(getSelectedUser);
  const userListSWR = useSWR(UserListURL, UserListFetcher);
  const UserListBar = useMemo(() => {
    if (!userListSWR || !userListSWR.data) {
      return <Text style={styles.text}>No user list swr</Text>;
    }
    return userListSWR.data.map((item, index) => {
      return <ListBar key={index} userData={item} index={index} />;
    });
  }, [userListSWR.data]);
  useEffect(() => {
    userListSWR.mutate();
  }, [modalVisible]);

  return (
    <View style={styles.container}>
      <NewUserModal />
      <View style={dataStyles.dataContainer}>
        <UserDataView label={'User ID'} value={user.id} editable={false} />
        <UserDataView label={'User Name'} value={user.name} editable={true} />
        <UserDataView
          label={'Last Tagged'}
          value={user.lastTagged}
          editable={false}
        />
        <UserDataView label={'Phone'} value={user.phone} editable={true} />
        <UserDataView label={'Card ID'} value={user.cardId} editable={true} />
        <UserDataView label={'Room ID'} value={user.roomId} editable={true} />
      </View>
      <View style={listStyles.listContainer}>
        <View style={listStyles.titleContainer}>
          <Text style={styles.text}>List </Text>
        </View>
        <ScrollView style={listStyles.listScrollView}>{UserListBar}</ScrollView>
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
