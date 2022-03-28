import React, {useMemo} from 'react';
import {View, Text, Platform} from 'react-native';

import * as S from './text.styled';

export default function CustomTextView({children, style, ...props}) {
  // const font = useMemo(() => {
  //   if (Platform.OS === 'ios') {
  //     return {};
  //   }

  //   let res = {fontWeight: '400', fontFamily: 'CormorantGaramond-Regular'};

  //   const _fontWeight = +style[0].fontWeight;

  //   if (_fontWeight === 300) {
  //     res.fontFamily = 'CormorantGaramond-Light';
  //   } else if (_fontWeight > 400 && _fontWeight < 700) {
  //     res.fontFamily = 'CormorantGaramond-Medium';
  //   } else if (_fontWeight > 700) {
  //     res.fontFamily = 'CormorantGaramond-Bold';
  //   }

  //   return res;
  // }, [style]);

  return (
    <S.Text style={style} {...props}>
      {children}
    </S.Text>
  );
}
