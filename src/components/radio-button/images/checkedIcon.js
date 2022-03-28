import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const CheckedIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20">
    <Circle cx="10" cy="10" r="10" fill="#00DC92"></Circle>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M14.125 7.375l-5.25 5.25L6.25 10"></Path>
  </Svg>
);

export default CheckedIcon;
