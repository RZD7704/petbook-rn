import React from 'react';
import {View, Text} from 'react-native';

import * as S from './welcome-phone.styled';

export default function WelcomePhoneView() {
  return (
    <S.Container>
      <S.Code>+7</S.Code>

      <S.Value>(978) 048-65-77</S.Value>
    </S.Container>
  );
}
