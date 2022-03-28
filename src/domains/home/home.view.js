import React from 'react';
import {Button} from 'react-native';

import {Page, Text} from '@components';

import * as S from './home.styled';

export default function HomeView({error, message, handlerGoLogin}) {
  console.log('HomeView error >>>', error);
  console.log('HomeView message >>>', message);

  return (
    <Page>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <S.Title>Choose a walking time</S.Title>
      <Button title="Sing Up" onPress={handlerGoLogin} />
    </Page>
  );
}
