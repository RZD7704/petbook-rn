import styled from 'styled-components/native';

import {Text} from '@components';

export const Container = styled.View`
  padding-top: ${props => props.insets.top}px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #ffffff;
  height: 150;
`;

export const Back = styled.TouchableOpacity`
  padding: 5px 0;
  max-width: 30px;
`;

export const Title = styled(Text)`
  font-weight: 700;
  font-size: 35px;
  line-height: 42px;
  color: #333333;
  padding-top: 10px;
`;
