import React from 'react';
import {View, Text} from 'react-native';

import {Hr} from '@components';

import * as S from './verification-footer.styled';

export default function VerificationFooterView({style}) {
  return (
    <S.Container style={style}>
      <Hr />

      <S.Description>
        Send code again in <S.Link>01:59</S.Link>
      </S.Description>
    </S.Container>
  );
}
