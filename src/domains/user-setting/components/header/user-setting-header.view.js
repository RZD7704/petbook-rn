import React from 'react';
import {View} from 'react-native';

import {PageTopLine, Later} from '@components/page';

import * as S from './user-setting-header.styled';

export default function UserSettingHeaderView({
  navigation,
  showBack,
  showLater,
}) {
  return (
    <S.Container>
      {showBack ? <PageTopLine navigation={navigation} /> : <View />}
      {showLater ? <Later navigation={navigation} /> : <View />}
    </S.Container>
  );
}
