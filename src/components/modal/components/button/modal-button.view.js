import React from 'react';

import * as S from './modal-button.styled';

export default function ModalButtonView({
  title,
  onClick,
  disabled,
  color,
  fontWeight,
}) {
  return (
    <S.Container onPress={onClick} disabled={disabled}>
      <S.Txt boldFont={fontWeight} color={color} disabled={disabled}>
        {title}
      </S.Txt>
    </S.Container>
  );
}
