import styled from 'styled-components/native';

import Text from '@components/text';
import BaseText from '@components/base-text';

export const Button = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: ${props => (props.active ? '#00dc92' : '#ffff')};
  padding-bottom: 10px;
`;

export const TxtMontserrat = styled(BaseText)`
  font-weight: 300;
  font-size: 30px;
  line-height: 36px;
  color: ${props => (props.active ? '#333333' : '#bdbdbd')};
`;

export const Txt = styled(Text)`
  font-weight: 300;
  font-size: 30px;
  line-height: 36px;
  color: ${props => (props.active ? '#333333' : '#bdbdbd')};
`;
