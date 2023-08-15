import {Log} from '@/assets/models/entity/Log';
import {listBarStyles} from '@/assets/static/styles/ListBarStyles';
import { getLastTaggedDisplayText } from '@/util/convertDisplayText';
import {View, Text} from 'react-native';

interface LogListBarProps {
  data: Log;
}
const LogListBar = ({data}: LogListBarProps) => {
  const detailText = `${data.cardId} tagged at ${data.address}`;
  return (
    <View style={listBarStyles.container}>
      <View style={listBarStyles.titleCard}>
        <Text style={listBarStyles.titleText}>{`Log ${data.id}`}</Text>
      </View>
      <View>
        <Text style={listBarStyles.detailText}>{detailText}</Text>
        <Text style={listBarStyles.detailText}>{data.result}</Text>
        <Text style={listBarStyles.detailTextOnRight}>
          {getLastTaggedDisplayText(data.taggedTime)}
        </Text>
      </View>
    </View>
  );
};

export default LogListBar;
