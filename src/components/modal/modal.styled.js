import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import {Text} from '@components';

export const Container = styled.View`
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
`;

export const TopLine = styled.View`
  margin-top: 10px;
`;

export const BottomLine = styled.View`
  margin-bottom: 15px;
`;

export const ModalItem = styled(Modal)`
  backdrop-filter: blur(5px);
`;

export const Title = styled(Text)`
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
`;

export const Body = styled.View`
  display: flex;
  align-items: center;
  margin: 15px 0 10px 0;
`;

export const Footer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
