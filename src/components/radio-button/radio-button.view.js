import React, {useState} from 'react';

import CheckedIcon from './images/checkedIcon';
import UncheckedIcon from './images/uncheckedIcon';

import * as S from './radio-button.styled';

function RadioButtonView({style, data, onSelect}) {
  const [radioOption, setRadioOption] = useState(null);

  const selectHandler = value => {
    onSelect(value);
    setRadioOption(value);
  };

  return (
    <S.Container style={style}>
      {data.map((item, indx) => {
        return (
          <S.RadioItem
            first={indx === 0 && true}
            selected={item.value === radioOption ? true : false}
            onPress={() => selectHandler(item.value)}>
            <S.Txt> {item.value}</S.Txt>
            {item.value === radioOption ? <CheckedIcon /> : <UncheckedIcon />}
          </S.RadioItem>
        );
      })}
    </S.Container>
  );
}

export default RadioButtonView;
