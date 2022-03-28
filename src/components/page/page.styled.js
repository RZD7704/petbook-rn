import styled from 'styled-components/native';

import {Text} from '@components';

export const Container = styled.View`
  flex: 1;
  /* padding-top: ${props => props.insets.top}px; */

  background-color: #fff;
`;

export const Content = styled.ScrollView.attrs(props => ({
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: 15,
    paddingBottom: props.insets.bottom,
  },
}))``;
