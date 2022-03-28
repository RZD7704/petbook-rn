import React from 'react';
import {View, Text} from 'react-native';

import * as S from './page-header.styled';

export default function PageHeaderView({title, description}) {
  return (
    <S.Container>
      {!!title && <S.Title>{title}</S.Title>}

      {!!description && <S.Description>{description}</S.Description>}
    </S.Container>
  );
}
