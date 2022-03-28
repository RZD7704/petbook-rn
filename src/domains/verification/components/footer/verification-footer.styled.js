import styled from 'styled-components/native';

import {Text} from '@components';

export const Container = styled.View`
  margin-top: auto;
  padding-bottom: 15px;
`;

export const Description = styled(Text)`
  margin: 16px 0px;

  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.3px;
  color: #828282;
  text-align: center;
  font-family: 'Montserrat';
`;

export const Link = styled(Text)`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.3px;
  color: #00dc92;
  text-align: center;
  font-family: 'Montserrat';
`;
