import {
  View,
  Text,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
} from 'react-native';
import useSWR from 'swr';
import {CardListFetcher, CardListURL} from '../../../swr/cardSWR';
import {useMemo} from 'react';
import ListBar from '../../../assets/list/ListBar';
import {CARD} from '../../../assets/static/texts/DataTypes';
import DataViewContainer from '../../../assets/views/data/DataViewContainer';
import DataView from '../../../assets/views/data/DataView';
import ListContainer from '../../../assets/views/data/ListContainer';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {getSelectedCard, setCard} from '../../../redux/features/cardState';
import TechTypeDataView from '../../../assets/views/data/card/TechTypeDataView';
import {setSelectModalVisible} from '../../../redux/features/modalState';
import SelectModal from '../../Modal/Card/SelectModal';
import {ModalType, setModalType} from '../../../redux/features/modalTypeState';

const CardScreen = () => {
  const card = useAppSelector(getSelectedCard);
  const dispatch = useAppDispatch();
  const cardListSWR = useSWR(CardListURL, CardListFetcher);
  const CardListBar = useMemo(() => {
    if (!cardListSWR || !cardListSWR.data) {
      return <Text style={styles.text}>No user list swr</Text>;
    }

    return cardListSWR.data.map((item, index) => {
      return (
        <ListBar
          key={index}
          type={CARD}
          data={item}
          index={index}
          onPress={(event: GestureResponderEvent) => {
            dispatch(setCard(item));
          }}
        />
      );
    });
  }, [cardListSWR.data]);

  return (
    <View style={styles.container}>
      <SelectModal></SelectModal>
      <DataViewContainer>
        <DataView label={'Card ID'} value={card.id} editable={false} />
        <DataView
          label={'Max Size'}
          value={`${card.maxSize}`}
          editable={false}
        />
        <DataView label={'Type'} value={card.type} editable={false} />
        <TechTypeDataView techType={card.techType} />
        <Pressable
          onPress={() => {
            dispatch(setSelectModalVisible(true));
            dispatch(setModalType(ModalType.user));
          }}>
          <DataView
            label={'User'}
            value={card.userId.length > 0 ? card.userId : 'N/A'}
            editable={false}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            dispatch(setSelectModalVisible(true));
            dispatch(setModalType(ModalType.room));
          }}>
          <DataView
            label={'Room'}
            value={card.roomId < 0 ? 'N/A' : card.roomId.toString()}
            editable={false}
          />
        </Pressable>
        <DataView
          label={'Used'}
          value={card.used ? 'Used' : 'Not Used'}
          editable={false}
        />
      </DataViewContainer>
      <ListContainer title={'Card'} listBars={CardListBar} height={30} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {padding: '3%'},
  whiteText: {
    color: '#ffffff',
  },
  text: {
    color: '#3c3c3c',
  },
});
export default CardScreen;
