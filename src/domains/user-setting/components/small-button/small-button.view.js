import React from 'react';
import {TouchableOpacity} from 'react-native';

import * as S from './small-button.styled';

export default function UserSettingHeaderView({onClick}) {
  return (
    <TouchableOpacity onPress={onClick}>
      <S.Text>select</S.Text>
    </TouchableOpacity>
  );
}
