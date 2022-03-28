import React from 'react';

import BackSVG from './images/back';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import * as S from './header.styled';

export default function HeaderView({navigation}) {
  const insets = useSafeAreaInsets();

  const onBack = () => {
    navigation.pop();
  };
  return (
    <S.Container insets={insets}>
      <S.Back onPress={onBack}>
        <BackSVG />
      </S.Back>
      <S.Title>Privacy Policy</S.Title>
    </S.Container>
  );
}
