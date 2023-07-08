import BottomTabButton from '@/assets/buttons/BottomTabButton';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native';

const BottomTabButtonList = ({
  state,
  navigation,
  descriptors,
  insets,
}: BottomTabBarProps) => {
  console.log(state.history);
  console.log(state.key);

  console.log(navigation.getId());
  const TabButtons = state.routeNames.map((item, index) => (
    <BottomTabButton key={index} navigation={navigation} name={item} />
  ));
  return <View style={styles.container}>{TabButtons}</View>;
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE3CB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '3%',
  },
});
export default BottomTabButtonList;
