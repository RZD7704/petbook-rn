import styled from 'styled-components/native';

import {Text, Button} from '@components';

export const Container = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text)`
  font-weight: 600;
  font-size: 96px;
  line-height: 116px;
  color: #fff;
`;

export const Footer = styled.View`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  padding: 0px 39px ${props => props.insets.bottom + 30}px;
`;

export const Action = styled(Button)`
  ${props => !props.last && 'margin-bottom: 25px;'}
`;
