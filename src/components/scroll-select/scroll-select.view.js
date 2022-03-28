import React, {useMemo} from 'react';
import {View} from 'react-native';

import * as S from './scroll-select.styled';

import ScrollPicker from './components/scroll-picker';

const ScrollSelectView = ({
  value1,
  setActiveItem1,
  value2,
  setActiveItem2,
  initialItem2,
  value3,
  setActiveItem3,
}) => {
  return (
    <S.Container>
      <View>
        <ScrollPicker values={value1} setActiveItem={setActiveItem1} />
      </View>
      <S.Item>
        <S.Line left />
        <ScrollPicker
          values={value2}
          setActiveItem={setActiveItem2}
          initialItem={initialItem2}
        />
        <S.Line right />
      </S.Item>
      <View>
        <ScrollPicker values={value3} setActiveItem={setActiveItem3} />
      </View>
    </S.Container>
  );
};

export default ScrollSelectView;
