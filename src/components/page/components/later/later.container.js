import React from 'react';

import LaterView from './later.view';

export default function LaterContainer({navigation, ...props}) {
  return <LaterView props={props} onBack={() => console.log('click onBack')} />;
}
