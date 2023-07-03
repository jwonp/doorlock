import {Button} from 'react-native';
import {setNewUserModalVisible} from '@/redux/features/modalState';
import {useAppDispatch} from '@/redux/hooks';
const NewUserModalButton = () => {
  const dispatach = useAppDispatch();
  return (
    <Button
      onPress={() => {
        dispatach(setNewUserModalVisible(true));
      }}
      title={'New'}
      color={'#3c3c3c'}></Button>
  );
};

export default NewUserModalButton;
