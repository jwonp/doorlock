import {View, Text} from 'react-native';

import {useAppSelector} from '@/redux/hooks';

import UserAddModal from '@/components/Modal/User/UserAddModal';
import useSWR from 'swr';
import {UserListFetcher, UserListURL} from '@/swr/userSWR';
import {useEffect, useMemo} from 'react';
import {getUserAddModalVisible} from '@/redux/features/modal/modalState';
import {screenStyles} from '@/assets/screen/ScreenStyleSheet';
import UserListBar from '@/assets/list/data/user/UserListBar';
import {USER} from '@/assets/static/texts/DataTypes';
import Selectable from '@/assets/list/data/Selectable';

const UserScreen = ({route}: {route: any}) => {
  const modalVisible = useAppSelector(getUserAddModalVisible);
  const userListSWR = useSWR(UserListURL, UserListFetcher);
  const ListBar = useMemo(() => {
    if (!userListSWR || !userListSWR.data) {
      return <Text style={{color: '#ffffff'}}>No User</Text>;
    }
    return userListSWR.data.map((item, index) => (
      <Selectable key={index} id={item.id} type={USER}>
        <UserListBar data={item} />
      </Selectable>
    ));
  }, [userListSWR.data]);
  useEffect(() => {
    userListSWR.mutate();
  }, [modalVisible]);

  return (
    <View style={screenStyles.container}>
      <UserAddModal />
      {ListBar}
    </View>
  );
};

export default UserScreen;
