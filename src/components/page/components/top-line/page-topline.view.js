import React from 'react';
import {View, Text} from 'react-native';

import * as S from './page-topline.styled';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import BackSVG from './images/back';

export default function PageToplineView({back, onBack}) {
  const insets = useSafeAreaInsets();

  return (
    <S.Container insets={insets}>
      <S.Content>
        <S.Back onPress={onBack}>
          <BackSVG />
        </S.Back>
      </S.Content>
    </S.Container>
  );
}
