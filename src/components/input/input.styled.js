import styled from 'styled-components/native';

export const Input = styled.TextInput`
  font-family: 'Cormorant Garamond';
  font-weight: 300;
  font-size: 36px;
  line-height: 44px;
  color: ${props => (props.value === '' ? '#bdbdbd' : '#333333')};
  border-bottom-color: #bdbdbd;
  border-bottom-width: 1px;
  padding: 5px 0;
`;
