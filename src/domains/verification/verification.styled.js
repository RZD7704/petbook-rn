import styled from 'styled-components/native';

import {Text} from '@components';

import VerificationFooter from './components/footer';

export const Number = styled(Text)`
  font-family: 'Montserrat';
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.3px;
  color: #828282;
`;

export const NumberPhone = styled(Text)`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 1px;
  color: #00dc92;
`;

export const Content = styled.View`
  flex: 1;
  padding: 34px 0px 12px;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled(VerificationFooter)`
  margin-top: 10px;
`;
