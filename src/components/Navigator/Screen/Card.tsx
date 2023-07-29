import {Text, ScrollView, View} from 'react-native';
import useSWR from 'swr';
import {CardListFetcher, CardListURL} from '@/swr/cardSWR';
import {useMemo} from 'react';
import {screenStyles} from '@/assets/screen/ScreenStyleSheet';

import CardListBar from '@/assets/list/data/card/CardListBar';
import CardAddModal from '@/components/Modal/Card/CardAddModal';
import Selectable from '@/assets/list/data/Selectable';
import {CARD} from '@/assets/static/texts/DataTypes';
import {useAppDispatch} from '@/redux/hooks';
import {setCardDetail} from '@/redux/features/modal/data/cardDetailState';
import CardDetailModal from '@/components/Modal/Card/CardDetailModal';
import {setCardDetailModalVisible} from '@/redux/features/modal/modalState';
const CardScreen = ({navigation}: {navigation: any}) => {
  const cardListSWR = useSWR(CardListURL, CardListFetcher);
  const dispatch = useAppDispatch();
  const ListBar = useMemo(() => {
    if (!cardListSWR || !cardListSWR.data) {
      return <Text style={{color: '#ffffff'}}>No Card</Text>;
    }
    return cardListSWR.data.map((item, index) => (
      <Selectable
        key={index}
        id={item.id}
        type={CARD}
        onLongPress={() => {
          dispatch(setCardDetail(item));
          dispatch(setCardDetailModalVisible(true));
        }}>
        <CardListBar data={item} />
      </Selectable>
    ));
  }, [cardListSWR.data]);

  return (
    <ScrollView style={screenStyles.container}>
      <CardAddModal />
      <CardDetailModal />
      {ListBar}
    </ScrollView>
  );
};

export default CardScreen;
