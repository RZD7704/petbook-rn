import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import AuthStack from './auth.stack';
import CabinetStack from './cabinet.stack';

import HomeScreen from '@domains/home';
import PolicyScreen from '@domains/policy';
import PolicyHeader from '@domains/policy/components/header';

const RootStack = createStackNavigator();

function App({}) {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Cabinet">
        <RootStack.Screen
          name="Auth"
          component={AuthStack}
          options={{
            header: () => null,
          }}
        />
        <RootStack.Screen
          name="Cabinet"
          component={CabinetStack}
          options={{
            header: () => null,
          }}
        />
        <RootStack.Screen
          name="Policy"
          component={PolicyScreen}
          options={{
            presentation: 'card',
            header: ({navigation}) => <PolicyHeader navigation={navigation} />,
          }}
        />
        <RootStack.Screen name="Home" component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
