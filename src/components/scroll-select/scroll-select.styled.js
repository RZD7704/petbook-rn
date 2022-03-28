import styled from 'styled-components/native';

import Text from '@components/text';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Item = styled.View`
  width: 40%;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Line = styled.View`
  position: absolute;
  height: 80px;
  width: 1px;
  background: #828282;
  top: 25px;
  ${props => props.left && 'left: 0'}
  ${props => props.right && 'right: 0'}
`;
