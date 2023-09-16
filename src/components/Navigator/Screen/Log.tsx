import LogListBar from '@/assets/list/data/log/LogListBar';
import {screenStyles} from '@/assets/screen/ScreenStyleSheet';
import { getScreenType } from '@/redux/features/modal/screenState';
import {getToken} from '@/redux/features/tokenState';
import {useAppSelector} from '@/redux/hooks';
import {LogListFetcher, LogListURL} from '@/swr/logSWR';
import {useEffect, useMemo} from 'react';
import {ScrollView, Text} from 'react-native';
import useSWR from 'swr';
const LogScreen = () => {
  const screen = useAppSelector(getScreenType);
  const jwt = useAppSelector(getToken);
  const logListSWR = useSWR(LogListURL, (url: string) =>
    LogListFetcher(jwt, url),
  );
  const ListBar = useMemo(() => {
    if (!logListSWR || !logListSWR.data) {
      return <Text style={{color: '#ffffff'}}>No Log</Text>;
    }
    return logListSWR.data.map((item, index) => (
      <LogListBar key={index} data={item} />
    ));
  }, [logListSWR.data]);
  useEffect(() => {
    logListSWR.mutate();
  }, [screen]);
  return <ScrollView style={screenStyles.container}>{ListBar}</ScrollView>;
};

export default LogScreen;
