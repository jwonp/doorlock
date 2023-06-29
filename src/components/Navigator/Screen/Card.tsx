import {View, Text, StyleSheet, GestureResponderEvent} from 'react-native';
import useSWR from 'swr';
import {CardListFetcher, CardListURL} from '../../../swr/cardSWR';
import {useMemo} from 'react';
import ListBar from '../../../assets/list/ListBar';
import {CARD} from '../../../assets/static/texts/DataTypes';
import DataViewContainer from '../../../assets/views/data/DataViewContainer';
import DataView from '../../../assets/views/data/DataView';
import ListContainer from '../../../assets/views/data/ListContainer';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {
  getSelectedCard,
  setSelectedCard,
} from '../../../redux/features/cardState';
import TechTypeDataView from '../../../assets/views/data/card/TechTypeDataView';
import {screenStyles} from '../../../assets/screen/ScreenStylyeSheet';
import {styles} from '../../../assets/list/ListBarStyleSheet';

const CardScreen = () => {
  const card = useAppSelector(getSelectedCard);
  const dispatch = useAppDispatch();
  const cardListSWR = useSWR(CardListURL, CardListFetcher);
  const CardListBar = useMemo(() => {
    if (!cardListSWR || !cardListSWR.data) {
      return <Text style={styles.text}>No user list</Text>;
    }

    return cardListSWR.data.map((item, index) => {
      return (
        <ListBar
          key={index}
          type={CARD}
          data={item}
          index={index}
          onPress={(event: GestureResponderEvent) => {
            dispatch(setSelectedCard(item));
          }}
        />
      );
    });
  }, [cardListSWR.data]);

  return (
    <View style={screenStyles.container}>
      <DataViewContainer>
        <DataView label={'Card ID'} text={card.id} />
        <DataView label={'Max Size'} text={`${card.maxSize}`} />
        <DataView label={'Type'} text={card.type} />
        <DataView label={'Tech Type'}>
          <TechTypeDataView techType={card.techType} />
        </DataView>

        <DataView label={'Reservation Id'} text={`${card.reservationId}`} />
      </DataViewContainer>
      <ListContainer title={'Card'} height={46}>
        {CardListBar}
      </ListContainer>
    </View>
  );
};

export default CardScreen;
