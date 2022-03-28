import * as React from 'react';

import UserSettingScreen from '@domains/user-setting';
import UserSettingHeader from '@domains/user-setting/components/header';
import BreedSelectScreen from '@domains/breed-select';
import BreedSettingHeader from '@domains/breed-select/components/header';

import {createStackNavigator} from '@react-navigation/stack';

const CabinetStack = createStackNavigator();

export default () => (
  <CabinetStack.Navigator initialRouteName="UserSetting">
    <CabinetStack.Screen
      name="UserSetting"
      component={UserSettingScreen}
      options={{
        header: ({navigation}) => (
          <UserSettingHeader
            navigation={navigation}
            back={false}
            later={true}
          />
        ),
      }}
    />
    <CabinetStack.Screen
      name="BreedSelect"
      component={BreedSelectScreen}
      options={{
        header: ({navigation}) => (
          <BreedSettingHeader
            navigation={navigation}
            back={true}
            later={false}
          />
        ),
      }}
    />
  </CabinetStack.Navigator>
);
