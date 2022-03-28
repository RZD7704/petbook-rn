import styled from 'styled-components/native';

import {BaseText} from '@components';

export const Container = styled.ScrollView`
  padding: 0 15px;
  background: ${props => (props.pageTop ? 'red' : '#fff')};
`;

export const Description = styled(BaseText)`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #333333;
  margin-bottom: 20px;
`;
