import React from 'react';
import {Text} from 'react-native';

import {Switch as Switcher} from 'react-native-switch';

const Switch = ({value, setValue}) => {
  return (
    <Switcher
      value={value}
      onValueChange={() => setValue(!value)}
      circleSize={18}
      circleBorderWidth={0}
      barHeight={3}
      backgroundActive={'#00DC92'}
      backgroundInactive={'#BDBDBD'}
      circleActiveColor={'#00DC92'}
      circleInActiveColor={'#828282'}
      changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
      renderActiveText={false}
      renderInActiveText={false}
      switchLeftPx={1}
      switchRightPx={1}
      switchWidthMultiplier={3} // multiplied by the `circleSize` prop to calculate total width of the Switch
    />
  );
};

export default Switch;
