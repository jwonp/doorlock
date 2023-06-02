import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/components/Navigator/Screen/Home';
import UserScreen from './src/components/Navigator/Screen/User';
import NFCScanScreen from './src/components/Navigator/Screen/NFCScan';
import NFCDataScreen from './src/components/Navigator/Screen/NFCData';
import CardScreen from './src/components/Navigator/Screen/NFCCard';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import NewUserModalButton from './src/assets/buttons/NewUserModalButton';

const Stack = createNativeStackNavigator();
const App = (): JSX.Element => {
  return (
    <Provider store={store}>
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
          <Stack.Screen name="Data" component={NFCDataScreen} />
          <Stack.Screen name="Scan" component={NFCScanScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
