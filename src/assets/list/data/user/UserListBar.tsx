import {UserListResponse} from '@/assets/models/dto/user/UserResponse';
import {listBarStyles} from '@/assets/static/styles/ListBarStyles';
import {View, Text} from 'react-native';

const UserListBar = ({data}: {data: UserListResponse}) => {
  return (
    <View style={listBarStyles.container}>
      <View style={listBarStyles.titleCard}>
        <Text style={listBarStyles.titleText}>{data.id}</Text>
      </View>
      <View>
        <Text style={listBarStyles.detailText}>{data.name}</Text>
        <View style={listBarStyles.flexRow}>
          <Text style={listBarStyles.detailText}>{data.phone}</Text>
        </View>
      </View>
    </View>
  );
};
export default UserListBar;
