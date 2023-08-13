import {
  Modal,
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {
  getSelectModalVisible,
  setSelectModalVisible,
} from '@/redux/features/modal/modalState';
import {FADE} from '@/assets/static/texts/ModalText';
import {useMemo, useState} from 'react';
import useSWR from 'swr';
import {
  ReservationSearchFetcher,
  ReservationSearchURL,
  ReservationSelectFetcher,
  ReservationSelectURL,
} from '@/swr/reservationSWR';
import SearchIcon from '@/public/search.png';

import {modalHeaderStlyes, modalStyles} from '@/assets/modals/ModalStyles';
import CloseIcon from '@/public/close-white.png';
import CardListBar from '@/assets/list/data/card/CardListBar';
import UserListBar from '@/assets/list/data/user/UserListBar';
import RoomListBar from '@/assets/list/data/room/RoomListBar';
import {
  getSelectModalAction,
  getSelectedModalType,
} from '@/redux/features/modal/selectModalState';
import {ADD, EDIT} from '@/assets/static/texts/SelectModalActions';
import {CARD, ROOM, USER} from '@/assets/static/texts/DataTypes';
import {
  setCardId,
  setRoomId,
  setUserId,
} from '@/redux/features/modal/data/reservationAddState';
import {
  setCardEditId,
  setRoomEditId,
  setUserEditId,
} from '@/redux/features/modal/data/reservationEditState';
import {DataType} from '@/redux/features/modal/screenState';

export type ListBarProps = {
  isDisable?: boolean;
};
const SelectModal = () => {
  const dispatch = useAppDispatch();
  const actionType = useAppSelector(getSelectModalAction);
  const modalVisible = useAppSelector(getSelectModalVisible);
  const modalType = useAppSelector(getSelectedModalType);
  const [query, setQuery] = useState<string>('');
  const SelectDataSWR = useSWR(
    ReservationSelectURL(modalType),
    ReservationSelectFetcher,
  );
  const SearchDataSWR = useSWR(
    ReservationSearchURL(modalType, query),
    ReservationSearchFetcher,
  );
  const ListBarType = {
    card: CardListBar,
    user: UserListBar,
    room: RoomListBar,
  };
  const ListBar = ListBarType[modalType];

  const ListBarList = useMemo(() => {
    if (!SelectDataSWR || !SelectDataSWR.data) {
      return <Text>{`No ${modalType}`}</Text>;
    }
    const dataSWR =
      SearchDataSWR && SearchDataSWR.data ? SearchDataSWR : SelectDataSWR;
    return dataSWR.data.map(
      (item, index) =>
        (modalType !== DataType.card || item.reservationId < 1) && (
          <Pressable
            key={index}
            onPress={() => {
              if (actionType === ADD) {
                if (modalType === USER) {
                  dispatch(setUserId(item.id));
                }
                if (modalType === ROOM) {
                  dispatch(setRoomId(item.id));
                }
                if (modalType === CARD) {
                  dispatch(setCardId(item.id));
                }
              }
              if (actionType === EDIT) {
                if (modalType === USER) {
                  dispatch(setUserEditId(item.id));
                }
                if (modalType === ROOM) {
                  dispatch(setRoomEditId(item.id));
                }
                if (modalType === CARD) {
                  dispatch(setCardEditId(item.id));
                }
              }
              dispatch(setSelectModalVisible(false));
            }}>
            <ListBar data={item} />
          </Pressable>
        ),
    );
  }, [SelectDataSWR, SearchDataSWR]);
  const closeModal = () => {
    setQuery('');
    dispatch(setSelectModalVisible(false));
  };
  return (
    <Modal
      onRequestClose={() => {
        closeModal();
      }}
      transparent={false}
      visible={modalVisible}
      animationType={FADE}>
      <View style={modalStyles.container}>
        <View style={modalStyles.header}>
          <View style={modalHeaderStlyes.closeContainer}>
            <Pressable
              onPress={() => {
                closeModal();
              }}>
              <Image source={CloseIcon} style={modalHeaderStlyes.icon} />
            </Pressable>
          </View>
          <View style={modalHeaderStlyes.titleContainer}>
            <View style={headerStyles.container}>
              <View style={headerStyles.inputCard}>
                <View style={headerStyles.iconCard}>
                  <Image style={headerStyles.icon} source={SearchIcon} />
                </View>
                <View style={headerStyles.input}>
                  <TextInput
                    style={headerStyles.inputText}
                    inputMode={'text'}
                    editable={true}
                    maxLength={50}
                    placeholderTextColor={'#000000'}
                    placeholder={'Search'}
                    onEndEditing={e => {
                      setQuery(e.nativeEvent.text);
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={modalStyles.main}>
          <ScrollView style={listStyles.container}>{ListBarList}</ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const headerStyles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    top: -15,
    height: 59,
    flexDirection: 'row',
  },
  inputCard: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
  },
  iconCard: {position: 'absolute', left: 70, top: 18, zIndex: 10},
  icon: {width: 20, height: 20},
  input: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '2%',
    marginBottom: '3%',
    paddingLeft: '9%',
    borderRadius: 18,
    width: '70%',
    backgroundColor: '#EEE3CB',
    zIndex: 5,
  },
  inputText: {
    color: '#000000',
  },
});
const listStyles = StyleSheet.create({
  container: {
    paddingLeft: '5%',
    paddingRight: '5%',
  },
});
export default SelectModal;
