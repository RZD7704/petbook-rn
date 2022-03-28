import React from 'react';
import {View, Text} from 'react-native';

import * as S from './verification-code.styled';

const items = ['', '', '', ''];

export default function VerificationCodeView() {
  return (
    <S.Container>
      <S.Value>(978) 048-65-77</S.Value>
    </S.Container>
  );
}
