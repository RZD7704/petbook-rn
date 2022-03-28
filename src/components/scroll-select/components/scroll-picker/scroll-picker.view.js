import React from 'react';
import {Dimensions} from 'react-native';

import DynamicallySelectedPicker from 'react-native-dynamically-selected-picker';

const ScrollPickerItem = ({values, setActiveItem, initialItem = 1}) => {
  const width = Dimensions.get('window').width;

  return (
    <DynamicallySelectedPicker
      items={values}
      initialSelectedIndex={initialItem}
      transparentItemRows={1}
      selectedItemBorderColor={'#fff'}
      fontFamily={'Montserrat'}
      allItemsColor={'#333333'}
      onScrollEndDrag={({index}) => {
        setActiveItem(index);
      }}
      height={129}
      width={width * 0.2}
    />
  );
};

export default ScrollPickerItem;
