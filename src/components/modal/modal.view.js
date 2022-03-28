import React from 'react';

import {Hr} from '@components';
import Button from './components/button';

import * as S from './modal.styled';

export default function ModalView({
  visible,
  setVisible,
  title,
  children,
  disabledBtn,
}) {
  const onDone = () => {
    setVisible(!visible);
  };
  return (
    <S.ModalItem
      backdropColor={'rgba(24, 50, 86, 1)'}
      backdropOpacity={0.5}
      isVisible={visible}>
      <S.Container style={{display: 'flex'}}>
        <S.Title>{title}</S.Title>
        <S.TopLine>
          <Hr />
        </S.TopLine>
        <S.Body>{children}</S.Body>
        <S.BottomLine>
          <Hr />
        </S.BottomLine>
        <S.Footer>
          <Button
            title={'Cancel'}
            onClick={() => setVisible(false)}
            color={'#2F80ED'}
          />
          <Button
            title={'Done'}
            onClick={onDone}
            color={'#00DC92'}
            fontWeight={'bold'}
            disabled={disabledBtn}
          />
        </S.Footer>
      </S.Container>
    </S.ModalItem>
  );
}
