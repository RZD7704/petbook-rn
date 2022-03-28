import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="19"
    fill="none"
    viewBox="0 0 11 19">
    <Path
      stroke="#00DC92"
      strokeLinecap="round"
      strokeWidth="3"
      d="M9.5 2L2.707 8.793a1 1 0 000 1.414L9.5 17"></Path>
  </Svg>
);

export default SvgComponent;
