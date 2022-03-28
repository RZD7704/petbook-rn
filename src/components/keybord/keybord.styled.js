import styled from 'styled-components/native';

import {Text} from '@components';

export const Container = styled.View``;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Item = styled.TouchableOpacity`
  height: 73px;
  width: 81px;
  justify-content: center;
  align-items: center;
`;

export const Value = styled(Text)`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 4px;
  text-align: center;
  font-family: 'Montserrat';
`;

export const Done = styled(Text)`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.3px;
  color: #00dc92;
`;
