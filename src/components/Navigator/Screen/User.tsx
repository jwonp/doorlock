import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ListBar from '../../../assets/list/ListBar';
import {useAppSelector} from '../../../redux/hooks';
import {getSelectedUser} from '../../../redux/features/userState';

import NewUserModal from '../../Modal/NewUserModal';
import useSWR from 'swr';
import {UserListFetcher, UserListURL} from '../../../swr/userSWR';
import {useEffect, useMemo} from 'react';
import {getNewUserModalVisible} from '../../../redux/features/modalState';

import DataView from '../../../assets/views/data/DataView';
import {USER} from '../../../assets/static/texts/DataTypes';
import DataViewContainer from '../../../assets/views/data/DataViewContainer';
import ListContainer from '../../../assets/views/data/ListContainer';
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
      return <ListBar key={index} type={USER} data={item} index={index} />;
    });
  }, [userListSWR.data]);
  useEffect(() => {
    userListSWR.mutate();
  }, [modalVisible]);

  return (
    <View style={styles.container}>
      <NewUserModal />
      <DataViewContainer>
        <DataView label={'User ID'} value={user.id} editable={false} />
        <DataView label={'User Name'} value={user.name} editable={true} />
        <DataView label={'Phone'} value={user.phone} editable={true} />
        <DataView
          label={'Last Tagged'}
          value={user.lastTagged}
          editable={false}
        />
        <DataView label={'Card ID'} value={user.cardId} editable={false} />
        <DataView label={'Room ID'} value={user.roomId} editable={false} />
      </DataViewContainer>
      <ListContainer title={'List'} listBars={UserListBar} />
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
