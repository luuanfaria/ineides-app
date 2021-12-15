import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { Home } from '../screens/Home';

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
    </Navigator>
  )
}
