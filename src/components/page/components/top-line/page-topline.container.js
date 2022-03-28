import React from 'react';
import {View, Text} from 'react-native';

import PageToplineView from './page-topline.view';

export default function PageToplineContainer({navigation, ...props}) {
  return <PageToplineView props={props} onBack={navigation.goBack} />;
}
