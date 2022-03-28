import React from 'react';
import {View, Text} from 'react-native';

import WelcomeView from './welcome.view';

export default function StartContainer({navigation, ...props}) {
  const handlerDone = () => {
    navigation.navigate('Verification');
  };

  const handlerPolicy = () => {
    navigation.navigate('Policy');
  };

  return (
    <WelcomeView
      {...props}
      onDone={handlerDone}
      handlerPolicy={handlerPolicy}
    />
  );
}
