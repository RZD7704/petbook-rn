import React from 'react';

import * as S from './input.styled';

export default function PageView({
  value,
  onChange,
  placeholder = 'useless placeholder',
  disable = false,
}) {
  return (
    <S.Input
      editable={!disable}
      selectTextOnFocus={!disable}
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
}
