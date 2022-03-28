import styled from 'styled-components/native';

import {Text} from '@components';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Code = styled(Text)`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  letter-spacing: 4px;
`;

export const Value = styled(Text)`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 30px;
  line-height: 37px;
  letter-spacing: 2px;
  color: #bdbdbd;
`;
