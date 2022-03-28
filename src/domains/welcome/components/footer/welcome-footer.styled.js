import styled from 'styled-components/native';

import {Text} from '@components';

export const Container = styled.View`
  margin-top: auto;
  padding-bottom: 8px;
`;

export const Content = styled.TouchableOpacity`
  padding: 12px 0px;
`;

export const Description = styled(Text)`
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  color: #bdbdbd;
  text-align: center;
`;

export const Link = styled(Text)`
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  color: #00dc92;
  text-align: center;
`;
