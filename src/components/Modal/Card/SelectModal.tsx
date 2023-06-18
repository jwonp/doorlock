import {useMemo} from 'react';
import {
  Modal,
  StyleSheet,
  View,
  Text,
  Pressable,
  GestureResponderEvent,
  Button,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {
  getSelectModalVisible,
  setSelectModalVisible,
} from '../../../redux/features/modalState';
import {ModalType, getModalType} from '../../../redux/features/modalTypeState';
import useSWR from 'swr';
import {CardSelectDataURL, SelectDataFetcher} from '../../../swr/cardSWR';
import {UserListResponse} from '../../../assets/models/dto/user/UserListResponse';
import {RoomListResponse} from '../../../assets/models/dto/room/RoomListResponse';
import ListBar from '../../../assets/list/ListBar';
import {ROOM, USER} from '../../../assets/static/texts/DataTypes';
import ListContainer from '../../../assets/views/data/ListContainer';
const SelectModal = () => {
  const dispatch = useAppDispatch();
  const modalVisible = useAppSelector(getSelectModalVisible);
  const modalType = useAppSelector(getModalType);
  const ModalDataSWR = useSWR(CardSelectDataURL(modalType), SelectDataFetcher);
  const ModalDataList = useMemo(() => {
    if (!ModalDataSWR || !ModalDataSWR.data)
      return (
        <View>
          <Text>No Data</Text>
        </View>
      );

    if (modalType === ModalType.room) {
      return (ModalDataSWR.data as RoomListResponse[]).map((item, index) => (
        <ListBar
          key={index}
          data={item}
          type={ROOM}
          index={index}
          onPress={(event: GestureResponderEvent) => {}}
        />
      ));
    }
    if (modalType === ModalType.user) {
      return (ModalDataSWR.data as UserListResponse[]).map((item, index) => (
        <ListBar
          key={index}
          data={item}
          type={USER}
          index={index}
          onPress={(event: GestureResponderEvent) => {}}
        />
      ));
    }
    return;
  }, [ModalDataSWR]);
  return (
    <Modal
      onRequestClose={() => {
        dispatch(setSelectModalVisible(false));
      }}
      transparent={true}
      visible={modalVisible}
      animationType={'slide'}>
      <View style={styles.modal}>
        <View>
          <Text style={styles.text}>Modal</Text>
        </View>
        <Pressable
          onPress={e => {
            console.warn('on pressed inner');
          }}
          style={styles.container}>
          <ListContainer
            title={modalType}
            listBars={ModalDataList}
            height={70}
          />
        </Pressable>
        <Button
          onPress={() => {
            dispatch(setSelectModalVisible(false));
          }}
          title={'Cancel'}
          color={'#3c3c3c'}
        />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#ffffff',
    padding: '2%',
    marginTop: 'auto',
    height: '50%',
  },
  container: {
    backgroundColor: '#ffffff',
  },
  text: {
    color: '#000000',
  },
});
export default SelectModal;
