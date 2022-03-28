import styled from 'styled-components/native';
import BaseText from '@components/base-text';

export const Container = styled.View`
  margin-top: 15px;
`;

export const RadioItem = styled.Pressable`
  padding: 15px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${props =>
    !props.first && 'border-top-color: #BDBDBD; border-top-width: 1px'};
`;

export const Txt = styled(BaseText)`
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;
