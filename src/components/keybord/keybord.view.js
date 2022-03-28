import React from 'react';
import {View, Text} from 'react-native';

import * as S from './keybord.styled';

import RemoveSvg from './images/remove';

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

export default function KeybordView({onDone}) {
  return (
    <S.Container>
      {data.map((row, rowIndex) => (
        <S.Row key={rowIndex}>
          {row.map((item, index) => (
            <S.Item key={index}>
              <S.Value>{item}</S.Value>
            </S.Item>
          ))}
        </S.Row>
      ))}

      <S.Row>
        <S.Item>
          <RemoveSvg />
        </S.Item>

        <S.Item>
          <S.Value>0</S.Value>
        </S.Item>

        {onDone ? (
          <S.Item onPress={onDone}>
            <S.Done>Done</S.Done>
          </S.Item>
        ) : (
          <S.Item />
        )}
      </S.Row>
    </S.Container>
  );
}
