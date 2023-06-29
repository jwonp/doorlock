import {
  View,
  Text,
  StyleSheet,
  GestureResponderEvent,
  Pressable,
} from 'react-native';
import ListBar from '../../../assets/list/ListBar';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {getSelectedUser, setUser} from '../../../redux/features/userState';

import NewUserModal from '../../Modal/NewUserModal';
import useSWR from 'swr';
import {UserListFetcher, UserListURL} from '../../../swr/userSWR';
import {useEffect, useMemo} from 'react';
import {
  getNewUserModalVisible,
  setSelectModalVisible,
} from '../../../redux/features/modalState';

import DataView from '../../../assets/views/data/DataView';
import {USER} from '../../../assets/static/texts/DataTypes';
import DataViewContainer from '../../../assets/views/data/DataViewContainer';
import ListContainer from '../../../assets/views/data/ListContainer';
import SelectModal from '../../Modal/Card/SelectModal';
import {ModalType, setModalType} from '../../../redux/features/modalTypeState';
const UserScreen = ({route}: {route: any}) => {
  const dispatch = useAppDispatch();
  const modalVisible = useAppSelector(getNewUserModalVisible);
  const user = useAppSelector(getSelectedUser);
  const userListSWR = useSWR(UserListURL, UserListFetcher);
  const UserListBar = useMemo(() => {
    if (!userListSWR || !userListSWR.data) {
      return <Text style={styles.text}>No user list swr</Text>;
    }
    return userListSWR.data.map((item, index) => {
      return (
        <ListBar
          key={index}
          type={USER}
          data={item}
          index={index}
          onPress={(event: GestureResponderEvent) => {
            dispatch(setUser(item));
          }}
        />
      );
    });
  }, [userListSWR.data]);
  useEffect(() => {
    userListSWR.mutate();
  }, [modalVisible]);

  return (
    <View style={styles.container}>
      <NewUserModal />
      {/* <SelectModal userListSWR={userListSWR} /> */}
      <DataViewContainer>
        <DataView label={'User ID'} text={user.id} />
        <DataView label={'User Name'} text={user.name} />
        <DataView label={'Phone'} text={user.phone} />
        <DataView
          label={'Last Tagged'}
          text={user.lastTagged ? user.lastTagged : 'Not Tagged'}
        />
        <Pressable
          onPress={() => {
            dispatch(setSelectModalVisible(true));
            dispatch(setModalType(ModalType.card));
          }}>
          <DataView
            label={'Card ID'}
            text={user.cardId ? user.cardId : 'N/A'}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            dispatch(setSelectModalVisible(true));
            dispatch(setModalType(ModalType.room));
          }}>
          <DataView
            label={'Room'}
            text={user.roomId ? user.roomId.toString() : 'N/A'}
          />
        </Pressable>
      </DataViewContainer>
      <ListContainer title={'List'} height={39}>
        {UserListBar}
      </ListContainer>
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
