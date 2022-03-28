import React from 'react';
import {View, Text} from 'react-native';

// import PageTopline from './components/top-line';

import * as S from './page.styled';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function PageView({children, HeaderComponent}) {
  const insets = useSafeAreaInsets();

  return (
    <S.Container insets={insets}>
      {/* <PageTopline /> */}

      <S.Content insets={insets}>
        {HeaderComponent}

        {children}
      </S.Content>
    </S.Container>
  );
}
