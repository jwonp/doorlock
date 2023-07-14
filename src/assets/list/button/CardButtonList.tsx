import {headerButtonStyles} from '@/assets/buttons/HeaderButtonStyles';
import {View} from 'react-native';
import {buttonListStyles} from './ButtonListStyles';
import CardAddButton from '@/assets/buttons/card/CardAddButton';
import DeleteButton from '@/assets/buttons/DeleteButton';
import { CARD } from '@/assets/static/texts/DataTypes';

const CardButtonList = () => {
  return (
    <View style={buttonListStyles.container}>
      <View>
        <DeleteButton type={CARD} />
      </View>
      <View style={buttonListStyles.card}>
        <CardAddButton />
      </View>
    </View>
  );
};

export default CardButtonList;
