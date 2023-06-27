import * as React from 'react';
import {AppState} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/components/Navigator/Screen/Home';
import UserScreen from './src/components/Navigator/Screen/User';
import NFCScanScreen from './src/components/Navigator/Screen/NFCScan';
import ReservationScreen from './src/components/Navigator/Screen/Reservation';
import CardScreen from './src/components/Navigator/Screen/Card';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import NewUserModalButton from './src/assets/buttons/NewUserModalButton';
import {SWRConfig} from 'swr';
import RoomScreen from './src/components/Navigator/Screen/Room';

const Stack = createNativeStackNavigator();
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
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Welcome Home',
              }}
            />
            <Stack.Screen
              name="User"
              component={UserScreen}
              options={{
                headerRight: () => <NewUserModalButton />,
              }}
            />
            <Stack.Screen name="Card" component={CardScreen} />
            <Stack.Screen name="Room" component={RoomScreen} />
            <Stack.Screen name="Reservation" component={ReservationScreen} />
            <Stack.Screen name="Scan" component={NFCScanScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SWRConfig>
    </Provider>
  );
};

export default App;
