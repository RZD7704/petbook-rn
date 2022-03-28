import styled from 'styled-components/native';

import {Text} from '@components';

import WelcomeFooter from './components/footer';

export const Content = styled.View`
  flex: 1;
  padding: 34px 0px 12px;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled(WelcomeFooter)`
  margin-top: 10px;
`;
