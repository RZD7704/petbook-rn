import React from 'react';
import {View, Text} from 'react-native';

import * as S from './hr.styled';

export default function HrView() {
  return <S.Image source={require('./images/hr.png')} resizeMode="contain" />;
}
