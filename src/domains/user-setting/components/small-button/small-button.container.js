import React from 'react';
import {View, Text} from 'react-native';

import SmallButtonView from './small-button.view';

export default function UserSettingHeaderContainer({onClick}) {
  return <SmallButtonView onClick={onClick} />;
}
