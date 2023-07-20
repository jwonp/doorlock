import BottomTabButton from '@/assets/buttons/BottomTabButton';
import { DataTypes } from '@/assets/static/texts/DataTypes';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {StyleSheet, View, Text} from 'react-native';

const BottomTabButtonList = ({
  state,
  navigation,
  descriptors,
  insets,
}: BottomTabBarProps) => {
  const TabButtons = state.routeNames.map((item, index) => (
    <BottomTabButton
      key={index}
      history={state.history}
      navigation={navigation}
      name={item as DataTypes}
    />
  ));
  return <View style={styles.container}>{TabButtons}</View>;
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
});
export default BottomTabButtonList;
