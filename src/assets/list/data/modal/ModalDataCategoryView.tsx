import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {
  getSelectModalVisible,
  setSelectModalVisible,
} from '@/redux/features/modalState';
import {ModalType, setModalType} from '@/redux/features/modalTypeState';
import EditIcon from '@/public/edit.png';
import {CARD, ROOM, USER} from '@/assets/static/texts/DataTypes';
type ModalDataCategoryViewProps = {
  type: string;
};

type CategoryType = {
  text: string;
  type: ModalType;
};

type Category = {
  user: CategoryType;
  room: CategoryType;
  card: CategoryType;
};

const ModalDataCategoryView = ({type}: ModalDataCategoryViewProps) => {
  const dispatach = useAppDispatch();
  const selectModalVisible = useAppSelector(getSelectModalVisible);
  const category: Category = {
    user: {
      text: USER.toUpperCase(),
      type: ModalType.user,
    },
    room: {
      text: ROOM.toUpperCase(),
      type: ModalType.room,
    },
    card: {
      text: CARD.toUpperCase(),
      type: ModalType.card,
    },
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{category[type].text}</Text>
      <Pressable
        onPress={() => {
          dispatach(setModalType(category[type].type));
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
