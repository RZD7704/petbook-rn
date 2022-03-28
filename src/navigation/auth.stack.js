import * as React from 'react';

import StartScreen from '@domains/start';
import WelcomeScreen from '@domains/welcome';
import VerificationScreen from '@domains/verification';

import {PageTopLine} from '@components/page';

import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

export default () => (
  <AuthStack.Navigator
    initialRouteName="Root"
    screenOptions={{header: props => props.back && <PageTopLine {...props} />}}>
    <AuthStack.Screen name="Root" component={StartScreen} />

    <AuthStack.Screen name="Welcome" component={WelcomeScreen} />

    <AuthStack.Screen name="Verification" component={VerificationScreen} />
  </AuthStack.Navigator>
);
