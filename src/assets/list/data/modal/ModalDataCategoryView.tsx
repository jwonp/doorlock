import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {
  getSelectModalVisible,
  setSelectModalVisible,
} from '@/redux/features/modal/modalState';

import EditIcon from '@/public/edit.png';
import {setSelectedModalType} from '@/redux/features/modal/selectModalState';
import { DataType, DataTypes } from '@/assets/static/texts/DataTypes';
type ModalDataCategoryViewProps = {
  type: DataTypes;
};

const ModalDataCategoryView = ({type}: ModalDataCategoryViewProps) => {
  const dispatch = useAppDispatch();
  const selectModalVisible = useAppSelector(getSelectModalVisible);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {(DataType[type] as string).toUpperCase()}
      </Text>

      <Pressable
        onPress={() => {
          dispatch(setSelectedModalType(DataType[type]));
          if (selectModalVisible === false) {
            dispatch(setSelectModalVisible(true));
          }
        }}>
        <Image style={styles.icon} source={EditIcon} />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    color: '#ffffff',
  },
  icon: {
    width: 27,
    height: 27,
  },
});
export default ModalDataCategoryView;
