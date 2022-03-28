import React from 'react';
import {View, Text} from 'react-native';

import UserSettingHeaderView from './user-setting-header.view';

export default function UserSettingHeaderContainer({navigation, back, later}) {
  return (
    <UserSettingHeaderView
      navigation={navigation}
      showBack={back}
      showLater={later}
    />
  );
}
