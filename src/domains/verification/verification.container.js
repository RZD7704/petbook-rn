import React from 'react';

import VerificationView from './verification.view';

export default function StartContainer({navigation, ...props}) {
  const handlerDone = () => {
    navigation.navigate('Cabinet');
  };
  return <VerificationView onDone={handlerDone} {...props} />;
}
