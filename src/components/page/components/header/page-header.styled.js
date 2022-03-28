import styled from 'styled-components/native';

import Text from '@components/text';

export const Container = styled.View``;

export const Title = styled(Text)`
  font-weight: 300;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: -0.3px;
  color: #828282;
`;

export const Description = styled(Text)`
  margin-top: 10px;

  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.3px;
  color: #333333;
`;
