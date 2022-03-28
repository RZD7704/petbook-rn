import React from 'react';
import {View, Text} from 'react-native';

import * as S from './start.styled';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function StartView({onLogin}) {
  const insets = useSafeAreaInsets();

  return (
    <S.Container source={require('./images/bg.jpg')} resizeMode="cover">
      <S.Title>Petbook</S.Title>

      <S.Footer insets={insets}>
        <S.Action title="Continue with Apple" />

        <S.Action last title="Continue with login" onPress={onLogin} />
      </S.Footer>
    </S.Container>
  );
}
