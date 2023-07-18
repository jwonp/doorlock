import {setCardAddModalVisibie} from '@/redux/features/modalState';
import {Pressable, View, Image} from 'react-native';
import {headerButtonStyles} from './HeaderButtonStyles';
import {useAppDispatch} from '@/redux/hooks';
import {PayloadAction} from '@reduxjs/toolkit';
type AddButtonProps = {
  setModalVisible: (payload: boolean) => PayloadAction<boolean>;
  iconSource: any;
};
const ModalOpenButton = ({setModalVisible, iconSource}:AddButtonProps) => {
  const dispatch = useAppDispatch();
  return (
    <Pressable
      onPress={() => {
        dispatch(setModalVisible(true));
      }}>
      <View style={headerButtonStyles.marginRight}>
        <Image style={headerButtonStyles.icon} source={iconSource} />
      </View>
    </Pressable>
  );
};

export default ModalOpenButton;
