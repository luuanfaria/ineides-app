import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { SignUpSuccess } from '../screens/SignUpSuccess';
import { ForgotPassword } from '../screens/ForgotPassword';

import { theme } from '../global/styles/theme';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return(
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.primary
        }
      }}
    >


      <Screen
        name="SignIn"
        component={SignIn}
      />

      <Screen
        name="SignUp"
        component={SignUp}
      />

      <Screen
        name="Home"
        component={Home}
      />

      <Screen
        name="SignUpSuccess"
        component={SignUpSuccess}
      />

      <Screen
        name="ForgotPassword"
        component={ForgotPassword}
      />

    </Navigator>
  )
}
