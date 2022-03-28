import styled from 'styled-components/native';

import Text from '@components/text';

export const Container = styled.TouchableOpacity`
  width: 50%;
  display: flex;
  align-items: center;
`;

export const Txt = styled(Text)`
  margin-top: 10px;
  font-weight: ${props => (props.boldFont ? 700 : 400)};
  font-size: 40px;
  line-height: 48px;
  color: ${props => (props.disabled ? '#bdbdbd' : props.color)};
`;
