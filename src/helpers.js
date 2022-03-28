import {Dimensions} from 'react-native';

const Screen = Dimensions.get('window');
const ScreenWidth = Screen.width;
const ScreenHeight = Screen.height;

const ucFirst = str => {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
};

export {ScreenWidth, ScreenHeight, ucFirst};
