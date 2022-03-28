import styled from 'styled-components/native';

import {Text, Button} from '@components';

export const Content = styled.View`
  flex: 1;
  padding: 34px 0px 12px;
  justify-content: center;
  align-items: center;
`;

export const TopLine = styled.View`
  margin-top: 30px;
`;

export const BottomLine = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const AddPhotoContainer = styled.View`
  display: flex;
  align-items: center;
`;

export const AddPhotoBtn = styled.TouchableOpacity`
  margin-top: 40px;
`;
export const AddPhotoImage = styled.Image`
  width: 145px;
  height: 145px;
`;

export const ColumnWgt = styled.View`
  margin-top: 45px;
`;

export const RowWgt = styled.View`
  ${props => !props?.mt0 && 'margin-top: 45px'};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputBox = styled.View`
  width: 80%;
  margin-top: 15px;
`;

export const ScrollSelectBox = styled.View`
  margin-top: 25px;
`;

export const Title = styled(Text)`
  font-weight: 700;
  font-size: 35px;
  line-height: 42px;
`;

export const BtnBox = styled.View`
  margin-left: 15px;
  margin-right: 15px;
`;

export const Action = styled(Button)`
  ${props => !props.last && 'margin-bottom: 25px;'}
`;
