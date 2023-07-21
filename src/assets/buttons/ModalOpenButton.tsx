import {setCardAddModalVisibie} from '@/redux/features/modal/modalState';
import {Pressable, View, Image} from 'react-native';
import {headerButtonStyles} from './HeaderButtonStyles';
import {useAppDispatch} from '@/redux/hooks';
import {PayloadAction} from '@reduxjs/toolkit';
type AddButtonProps = {
  setModalVisible: (payload: boolean) => PayloadAction<boolean>;
  iconSource: any;
  onPress?: () => any;
};
const ModalOpenButton = ({
  onPress,
  setModalVisible,
  iconSource,
}: AddButtonProps) => {
  const dispatch = useAppDispatch();
  return (
    <Pressable
      onPress={() => {
        onPress();
        dispatch(setModalVisible(true));
      }}>
      <View style={headerButtonStyles.marginRight}>
        <Image style={headerButtonStyles.icon} source={iconSource} />
      </View>
    </Pressable>
  );
};

export default ModalOpenButton;
