import React from 'react';

import {ucFirst} from '@helpers';

import * as S from './tab.styled';

const Tab = ({value, name, onSet, style, fontFamily}) => {
  return (
    <S.Button
      style={style}
      active={value === name ? true : false}
      onPress={() => onSet(name)}>
      {fontFamily === 'Montserrat' ? (
        <S.TxtMontserrat active={value === name ? true : false}>
          {ucFirst(name)}
        </S.TxtMontserrat>
      ) : (
        <S.Txt active={value === name ? true : false}>{ucFirst(name)}</S.Txt>
      )}
    </S.Button>
  );
};

export default Tab;
