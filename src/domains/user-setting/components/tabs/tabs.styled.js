import styled from 'styled-components/native';

import {Text} from '@components';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;

export const Button = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: ${props => (props.active ? '#00dc92' : '#ffff')};
  padding-bottom: 10px;
`;

export const Txt = styled(Text)`
  font-weight: 300;
  font-size: 30px;
  line-height: 36px;
  color: ${props => (props.active ? '#333333' : '#bdbdbd')};
`;

export const SubText = styled(Text)`
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  color: #333333;
  margin: 0 15px;
`;
