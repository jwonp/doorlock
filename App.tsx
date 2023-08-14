import * as React from 'react';
import {AppState} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import UserScreen from './src/components/Navigator/Screen/User';
import NFCScanScreen from './src/components/Navigator/Screen/NFCScan';
import ReservationScreen from './src/components/Navigator/Screen/Reservation';
import CardScreen from './src/components/Navigator/Screen/Card';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

import {SWRConfig} from 'swr';
import RoomScreen from './src/components/Navigator/Screen/Room';
import ReservationButtonList from '@/assets/list/button/ReservationButtonList';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabButtonList from '@/assets/list/button/BottomTabButtonList';
import SelectCancelButton from '@/assets/buttons/SelectCancelButton';
import CardButtonList from '@/assets/list/button/CardButtonList';
import RoomButtonList from '@/assets/list/button/RoomButtonList';
import {
  CARD,
  RESERVATION,
  ROOM,
  SCAN,
  USER,
} from '@/assets/static/texts/DataTypes';
import UserButtonList from '@/assets/list/button/UserButtonList';

const Tab = createBottomTabNavigator();

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <SWRConfig
        value={{
          provider: () => new Map(),
          isVisible: () => {
            return true;
          },
          initFocus(callback) {
            let appState = AppState.currentState;

            const onAppStateChange = nextAppState => {
              /* 백그라운드 또는 비활성 모드에서 활성 모드로 다시 시작하는 경우 */
              if (
                appState.match(/inactive|background/) &&
                nextAppState === 'active'
              ) {
                callback();
              }
              appState = nextAppState;
            };

            // 앱 상태 변경 이벤트 구독
            const subscription = AppState.addEventListener(
              'change',
              onAppStateChange,
            );

            return () => {
              subscription.remove();
            };
          },
        }}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarItemStyle: {flexDirection: 'row', padding: '10%'},
            }}
            // initialRouteName={'scan'}
            tabBar={props => (
              <BottomTabButtonList
                state={props.state}
                navigation={props.navigation}
                descriptors={props.descriptors}
                insets={props.insets}
              />
            )}>
            <Tab.Screen
              name={CARD}
              component={CardScreen}
              options={{
                headerStyle: {
                  backgroundColor: '#967E76',
                  borderWidth: 2,
                  borderBottomColor: '#EEE3CB',
                },

                headerTitleStyle: {
                  fontWeight: 'bold',
                  color: '#ffffff',
                },
                headerTitle: 'Card',
                headerTitleAlign: 'center',
                headerLeft: () => <SelectCancelButton />,
                headerRight: () => <CardButtonList />,
              }}
            />
            <Tab.Screen
              name={USER}
              component={UserScreen}
              options={{
                headerStyle: {
                  backgroundColor: '#967E76',
                  borderWidth: 2,
                  borderBottomColor: '#EEE3CB',
                },

                headerTitleStyle: {
                  fontWeight: 'bold',
                  color: '#ffffff',
                },
                headerTitle: 'User',
                headerTitleAlign: 'center',
                headerLeft: () => <SelectCancelButton />,
                headerRight: () => <UserButtonList />,
              }}
            />
            <Tab.Screen
              name={ROOM}
              component={RoomScreen}
              options={{
                headerStyle: {
                  backgroundColor: '#967E76',
                  borderWidth: 2,
                  borderBottomColor: '#EEE3CB',
                },

                headerTitleStyle: {
                  fontWeight: 'bold',
                  color: '#ffffff',
                },
                headerTitle: 'Room',
                headerTitleAlign: 'center',
                headerLeft: () => <SelectCancelButton />,
                headerRight: () => <RoomButtonList />,
              }}
            />
            <Tab.Screen
              name={RESERVATION}
              component={ReservationScreen}
              options={{
                headerStyle: {
                  backgroundColor: '#967E76',
                  borderWidth: 2,
                  borderBottomColor: '#EEE3CB',
                },
                headerTitleStyle: {
                  fontWeight: 'bold',
                  color: '#ffffff',
                },
                headerTitle: 'Reservation',
                headerTitleAlign: 'center',
                headerLeft: () => <SelectCancelButton />,
                headerRight: () => <ReservationButtonList />,
              }}
            />
            <Tab.Screen
              name={SCAN}
              component={NFCScanScreen}
              options={{
                headerStyle: {
                  backgroundColor: '#967E76',
                  borderWidth: 2,
                  borderBottomColor: '#EEE3CB',
                },

                headerTitleStyle: {
                  fontWeight: 'bold',
                  color: '#ffffff',
                },
                headerTitle: 'Scan',
                headerTitleAlign: 'center',
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SWRConfig>
    </Provider>
  );
};

export default App;
