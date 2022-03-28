import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';

const UncheckedIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20">
    <Circle
      cx="10"
      cy="10"
      r="9"
      stroke="#00DC92"
      strokeWidth="2"
      opacity="0.5"></Circle>
  </Svg>
);

export default UncheckedIcon;
