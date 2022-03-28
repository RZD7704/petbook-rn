import React from 'react';
import {View, Text} from 'react-native';

import * as S from './later.styled';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function LaterView({onBack}) {
  const insets = useSafeAreaInsets();

  return (
    <S.Container insets={insets}>
      <S.Content>
        <S.Back onPress={onBack}>
          <S.Text>Later</S.Text>
        </S.Back>
      </S.Content>
    </S.Container>
  );
}
