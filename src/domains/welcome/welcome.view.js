import React from 'react';
import {View, Text} from 'react-native';

import {Keybord} from '@components';
import Page, {PageHeader} from '@components/page';

import WelcomePhone from './components/phone';

import * as S from './welcome.styled';

export default function WelcomeView({onDone, handlerPolicy}) {
  return (
    <Page
      HeaderComponent={
        <PageHeader
          title="Welcome"
          description="Fill out the form to enter the application"
        />
      }>
      <S.Content>
        <WelcomePhone />
      </S.Content>

      <Keybord onDone={onDone} />

      <S.Footer handlerPolicy={handlerPolicy} />
    </Page>
  );
}
