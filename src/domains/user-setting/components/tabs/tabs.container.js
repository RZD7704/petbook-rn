import React from 'react';
import {View, Text} from 'react-native';

import TabsView from './tabs.view';

export default function TabsContainer({sex, setSex}) {
  return <TabsView value={sex} setSex={setSex} />;
}
