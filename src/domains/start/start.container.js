import React from 'react';
import {View, Text} from 'react-native';

import StartView from './start.view';

export default function StartContainer({navigation, ...props}) {
  const handlerLogin = () => {
    navigation.navigate('Welcome');
  };

  return <StartView {...props} onLogin={handlerLogin} />;
}
