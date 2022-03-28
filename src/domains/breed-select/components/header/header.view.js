import React from 'react';

import BackSVG from './images/back';
import {PageTopLine} from '@components/page';

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
      <S.Title>Choosing a pet breed</S.Title>
    </S.Container>
  );
}
