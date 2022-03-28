import React from 'react';

import * as S from './base-text.styled';

export default function BaseTextView({children, style, ...props}) {
  return (
    <S.Text style={style} {...props}>
      {children}
    </S.Text>
  );
}
