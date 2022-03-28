import PropTypes from 'prop-types';
import React from 'react';

import {Text, View, ActivityIndicator} from 'react-native';

import * as S from './button.styled';

const Button = ({
  style,
  titleStyle,
  title,
  theme,
  shadow,
  round,
  disabled,
  loading,
  IconComponent,
  RightComponent,
  onPress,
}) => {
  return (
    <S.Container
      style={style}
      theme={theme}
      shadow={shadow}
      round={round}
      disabled={disabled}
      onPress={onPress}>
      {loading ? (
        <S.Loader>
          <ActivityIndicator size="small" color="#fff" />
        </S.Loader>
      ) : (
        <>
          <S.Title style={titleStyle} theme={theme} round={round}>
            {title}
          </S.Title>

          {!!IconComponent && <S.Icon>{IconComponent}</S.Icon>}

          {!!RightComponent && <S.Right>{RightComponent}</S.Right>}
        </>
      )}
    </S.Container>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  theme: PropTypes.string,
  shadow: PropTypes.bool,
  round: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  size: 24,
  theme: 'orange',
  shadow: false,
  disabled: false,
  round: false,
};

export default Button;
