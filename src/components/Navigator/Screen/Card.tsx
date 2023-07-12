import {Text, ScrollView} from 'react-native';
import useSWR from 'swr';
import {CardListFetcher, CardListURL} from '@/swr/cardSWR';
import {useMemo} from 'react';

import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {getSelectedCard} from '@/redux/features/cardState';

import {screenStyles} from '@/assets/screen/ScreenStylyeSheet';

import CardListBar from '@/assets/list/data/card/CardListBar';
const CardScreen = () => {
  const card = useAppSelector(getSelectedCard);
  const dispatch = useAppDispatch();
  const cardListSWR = useSWR(CardListURL, CardListFetcher);
  const ListBar = useMemo(() => {
    if (!cardListSWR || !cardListSWR.data) {
      return <Text style={{color: '#ffffff'}}>No user list</Text>;
    }
    return cardListSWR.data.map((item, index) => (
      <CardListBar key={index} data={item} />
    ));
  }, [cardListSWR.data]);

  return <ScrollView style={screenStyles.container}>{ListBar}</ScrollView>;
};

export default CardScreen;
