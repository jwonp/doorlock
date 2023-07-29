import {View, Text} from 'react-native';

import {useAppDispatch, useAppSelector} from '@/redux/hooks';

import UserAddModal from '@/components/Modal/User/UserAddModal';
import useSWR from 'swr';
import {UserListFetcher, UserListURL} from '@/swr/userSWR';
import {useMemo} from 'react';
import {setUserEditModalVisible} from '@/redux/features/modal/modalState';
import {screenStyles} from '@/assets/screen/ScreenStyleSheet';
import UserListBar from '@/assets/list/data/user/UserListBar';
import {USER} from '@/assets/static/texts/DataTypes';
import Selectable from '@/assets/list/data/Selectable';
import UserEditModal from '@/components/Modal/User/UserEditModal';
import {setUserEdit} from '@/redux/features/modal/data/userEditState';

const UserScreen = ({route}: {route: any}) => {
  const userListSWR = useSWR(UserListURL, UserListFetcher);
  const dispatch = useAppDispatch();
  const ListBar = useMemo(() => {
    if (!userListSWR || !userListSWR.data) {
      return <Text style={{color: '#ffffff'}}>No User</Text>;
    }
    return userListSWR.data.map((item, index) => (
      <Selectable
        key={index}
        id={item.id}
        type={USER}
        onLongPress={() => {
          dispatch(setUserEdit(item));
          dispatch(setUserEditModalVisible(true));
        }}>
        <UserListBar data={item} />
      </Selectable>
    ));
  }, [userListSWR.data]);

  return (
    <View style={screenStyles.container}>
      <UserAddModal />
      <UserEditModal />
      {ListBar}
    </View>
  );
};

export default UserScreen;
