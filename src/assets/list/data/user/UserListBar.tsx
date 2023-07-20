import {UserListResponse} from '@/assets/models/dto/user/UserListResponse';
import {listBarStyles} from '@/assets/static/styles/ListBarStyles';
import {getLastTaggedDisplayText} from '@/util/convertDisplayText';
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
          <Text style={listBarStyles.detailText}>
            {getLastTaggedDisplayText(data.id, data.lastTagged)}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default UserListBar;
