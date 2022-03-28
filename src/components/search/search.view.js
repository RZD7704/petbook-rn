import React, {useContext} from 'react';
import SvgComponent from './images/search';

import * as S from './search.styled';

function SearchView({
  style,
  value,
  placeholder,
  onSubmitEditing,
  onChangeText,
}) {
  return (
    <S.Container style={style}>
      <S.IconBox>
        <SvgComponent name="search" />
      </S.IconBox>

      <S.Input
        value={value}
        placeholder={placeholder}
        onSubmitEditing={onSubmitEditing}
        onChangeText={onChangeText}
        // padding={false}
      />
    </S.Container>
  );
}

export default SearchView;
