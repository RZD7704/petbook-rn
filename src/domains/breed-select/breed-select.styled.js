import styled from 'styled-components/native';

import {Button} from '@components';

export const Container = styled.ScrollView`
  padding: 0 15px;
  background-color: #fff;
`;

export const List = styled.View`
  margin-top: 15px;
`;

export const BtnBox = styled.View`
  margin: 20px 15px 0 15px;
`;

export const Action = styled(Button)`
  ${props => !props.last && 'margin-bottom: 25px;'}
`;
