import styled from 'styled-components/native';

import BaseText from '@components/base-text';

export const Container = styled.View`
  padding-top: ${props => props.insets.top}px;

  background-color: #fff;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 46px;
`;

export const Back = styled.TouchableOpacity`
  height: 100%;
  padding: 0px 15px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled(BaseText)`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #eb5757;
`;
