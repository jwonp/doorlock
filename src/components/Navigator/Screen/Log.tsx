import LogListBar from '@/assets/list/data/log/LogListBar';
import {screenStyles} from '@/assets/screen/ScreenStyleSheet';
import {LogListFetcher, LogListURL} from '@/swr/logSWR';
import {useMemo} from 'react';
import {ScrollView, Text} from 'react-native';
import useSWR from 'swr';
const LogScreen = () => {
  const logListSWR = useSWR(LogListURL, LogListFetcher);
  const ListBar = useMemo(() => {
    if (!logListSWR || !logListSWR.data) {
      return <Text style={{color: '#ffffff'}}>No Log</Text>;
    }
    return logListSWR.data.map((item, index) => (
      <LogListBar key={index} data={item} />
    ));
  }, [logListSWR.data]);
  return <ScrollView style={screenStyles.container}>{ListBar}</ScrollView>;
};

export default LogScreen;
