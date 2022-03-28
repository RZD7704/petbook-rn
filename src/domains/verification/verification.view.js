import React from 'react';
import {View, Text} from 'react-native';

import {Keybord} from '@components';
import Page, {PageHeader} from '@components/page';

import CerificationCode from './components/code';

import * as S from './verification.styled';

export default function VerificationView({onDone}) {
  return (
    <Page
      HeaderComponent={
        <PageHeader title="Verification" description="Sent SMS code" />
      }>
      <S.Number>
        To the number: <S.NumberPhone>+7 (978) 048-65-77</S.NumberPhone>
      </S.Number>

      <S.Content>{/* <CerificationCode /> */}</S.Content>

      <Keybord onDone={onDone} />

      <S.Footer />
    </Page>
  );
}
