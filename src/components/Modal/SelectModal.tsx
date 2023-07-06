import {
  Modal,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {
  getSelectModalVisible,
  setSelectModalVisible,
} from '@/redux/features/modalState';
import {getModalType} from '@/redux/features/modalTypeState';
import ListContainer from '@/assets/views/data/ListContainer';
import {FADE} from '@/assets/static/texts/ModalText';
import {useMemo} from 'react';
import useSWR from 'swr';
import { ReservationSelectFetcher, ReservationSelectURL } from '@/swr/reservationSWR';
const SelectModal = () => {
  const dispatch = useAppDispatch();
  const modalVisible = useAppSelector(getSelectModalVisible);
  const modalType = useAppSelector(getModalType);
  const SelectDataSWR = useSWR(ReservationSelectURL(modalType),ReservationSelectFetcher);
  const DataViewList = useMemo(() => {}, []);
  return (
    <Modal
      onRequestClose={() => {
        dispatch(setSelectModalVisible(false));
      }}
      transparent={false}
      visible={modalVisible}
      animationType={FADE}>
      <View style={styles.modal}>
        <View style={styles.container}>
          <View style={headerStyles.container}>
            <View>
              <Image source={require('@/public/search.svg')} />
            </View>
            <TextInput
              editable={true}
              maxLength={50}
              placeholderTextColor={'#ffffff'}
              placeholder={'Search'}
            />
          </View>
        </View>

        <View style={listStyles.container}>
          <TouchableOpacity>
            <ListContainer title={modalType} height={50}>
              <></>
            </ListContainer>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#3c3c3c',
    padding: '2%',
    height: '100%',
  },
  container: {backgroundColor: '#fffddd'},
  text: {
    color: '#ffffff',
  },
});
const headerStyles = StyleSheet.create({
  container: {
    height: '30%',
    backgroundColor: '#3c3cff',
  },
});
const listStyles = StyleSheet.create({
  container: {
    height: '70%',
  },
});
export default SelectModal;
