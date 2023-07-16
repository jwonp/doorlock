import {View, Text, StyleSheet, GestureResponderEvent} from 'react-native';

import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {getSelectedUser, setUser} from '@/redux/features/userState';
import NewUserModal from '@/components/Modal/User/UserAddModal';
import useSWR from 'swr';
import {UserListFetcher, UserListURL} from '@/swr/userSWR';
import {useEffect, useMemo} from 'react';
import {getUserAddModalVisible} from '@/redux/features/modalState';
import {screenStyles} from '@/assets/screen/ScreenStylyeSheet';
import UserListBar from '@/assets/list/data/user/UserListBar';

const UserScreen = ({route}: {route: any}) => {
  const dispatch = useAppDispatch();
  const modalVisible = useAppSelector(getUserAddModalVisible);
  const user = useAppSelector(getSelectedUser);
  const userListSWR = useSWR(UserListURL, UserListFetcher);
  const ListBar = useMemo(() => {
    if (!userListSWR || !userListSWR.data) {
      return <Text style={{color: '#ffffff'}}>No user list swr</Text>;
    }
    return userListSWR.data.map((item, index) => (
      <UserListBar key={index} data={item} />
    ));
  }, [userListSWR.data]);
  useEffect(() => {
    userListSWR.mutate();
  }, [modalVisible]);

  return (
    <View style={screenStyles.container}>
      <NewUserModal />
      {ListBar}
    </View>
  );
};

export default UserScreen;
