import styled from 'styled-components/native';

import SvgComponent from './images/search';

export const Container = styled.View`
  position: relative;
  border-radius: 10px;
`;

export const Input = styled.TextInput.attrs(props => ({
  placeholderTextColor: '#828282',
  fontFamily: 'Montserrat',
}))`
  padding: 10px 7px;
  width: 100%;
  background: #f7f7f7;
  border-radius: 5px;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
`;

export const IconBox = styled.View`
  position: absolute;
  right: 7px;
  top: 12px;
  z-index: 1;
`;
