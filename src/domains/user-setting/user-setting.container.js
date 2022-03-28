import React from 'react';
import {View, Text} from 'react-native';

import UserSettingView from './user-setting.view';

export default function UserSettingContainer({navigation}) {
  const handlerBeer = () => {
    navigation.navigate('BreedSelect');
  };
  return <UserSettingView handlerPolicy={handlerBeer} />;
}
