import styled from 'styled-components/native';

import {Platform} from 'react-native';

import Text from '@components/text';

export const Container = styled.TouchableOpacity`
  height: 50px;
  padding: 0px 16px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${props =>
    props.disabled ? 'rgba(0, 220, 146, .5)' : 'rgba(0, 220, 146, 1)'};
  border-radius: 50px;
`;

export const Title = styled(Text)`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #fff;
`;

export const Icon = styled.View`
  margin-left: auto;
`;

export const Right = styled.View`
  position: absolute;
  right: 24px;
`;

export const Loader = styled.View`
  width: 100%;
  height: 100%;

  flex-direction: row;

  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 1;
`;
