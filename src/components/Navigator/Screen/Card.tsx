import {Text, ScrollView} from 'react-native';
import useSWR from 'swr';
import {CardListFetcher, CardListURL} from '@/swr/cardSWR';
import {useMemo} from 'react';

import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {addCardSelected, getSelectedCards} from '@/redux/features/cardState';

import {screenStyles} from '@/assets/screen/ScreenStylyeSheet';

import CardListBar from '@/assets/list/data/card/CardListBar';
import CardAddModal from '@/components/Modal/Card/CardAddModal';
const CardScreen = ({navigation}:{navigation: any}) => {
  const cardListSWR = useSWR(CardListURL, CardListFetcher);
  const ListBar = useMemo(() => {
    if (!cardListSWR || !cardListSWR.data) {
      return <Text style={{color: '#ffffff'}}>No user list</Text>;
    }
    return cardListSWR.data.map((item, index) => (
      <CardListBar key={index} data={item} />
    ));
  }, [cardListSWR.data]);

  return (
    <ScrollView style={screenStyles.container}>
      <CardAddModal />
      {ListBar}
    </ScrollView>
  );
};

export default CardScreen;
