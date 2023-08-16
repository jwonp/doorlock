import BottomTabButton from '@/assets/buttons/BottomTabButton';
import {DataTypes, TAG} from '@/assets/static/texts/DataTypes';
import {getScreenType} from '@/redux/features/modal/screenState';
import {useAppSelector} from '@/redux/hooks';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {StyleSheet, View} from 'react-native';

const BottomTabButtonList = ({
  state,
  navigation,
  descriptors,
  insets,
}: BottomTabBarProps) => {
  const screen = useAppSelector(getScreenType);
  const TabButtons = state.routeNames.map((item, index) => (
    <BottomTabButton
      key={index}
      history={state.history}
      navigation={navigation}
      name={item as DataTypes}
    />
  ));

  return (
    <View style={screen === TAG ? styles.hidden : styles.container}>
      {TabButtons}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D7C0AE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '3%',
  },
  hidden: {
    display: 'none',
  },
});
export default BottomTabButtonList;
