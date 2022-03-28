import styled from 'styled-components/native';

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
