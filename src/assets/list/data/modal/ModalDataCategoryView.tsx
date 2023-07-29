import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {
  getSelectModalVisible,
  setSelectModalVisible,
} from '@/redux/features/modal/modalState';
import {DataType} from '@/redux/features/modal/screenState';
import EditIcon from '@/public/edit.png';
import {setSelectedModalType} from '@/redux/features/modal/selectModalState';
type ModalDataCategoryViewProps = {
  type: DataType;
};

const ModalDataCategoryView = ({type}: ModalDataCategoryViewProps) => {
  const dispatach = useAppDispatch();
  const selectModalVisible = useAppSelector(getSelectModalVisible);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {(DataType[type] as string).toUpperCase()}
      </Text>

      <Pressable
        onPress={() => {
          dispatach(setSelectedModalType(DataType[type]));
          if (selectModalVisible === false) {
            dispatach(setSelectModalVisible(true));
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
