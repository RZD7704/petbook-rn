import React from 'react';

import {Hr} from '@components';

import * as S from './welcome-footer.styled';

export default function WelcomeFooterView({style, handlerPolicy}) {
  return (
    <S.Container style={style}>
      <Hr />

      <S.Content onPress={handlerPolicy}>
        <S.Description>By continuing to log in, you agree to the</S.Description>

        <S.Link>user agreement</S.Link>
      </S.Content>
    </S.Container>
  );
}
