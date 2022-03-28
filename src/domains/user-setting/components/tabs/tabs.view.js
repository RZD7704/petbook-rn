import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Tab} from '@components';

import * as S from './tabs.styled';

export default function TabsView({value, setSex}) {
  return (
    <S.Container>
      <Tab value={value} name={'male'} onSet={setSex} />
      <S.SubText>or</S.SubText>
      <Tab value={value} name={'female'} onSet={setSex} />
    </S.Container>
  );
}
