import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AppStack from './AppStack';
import Auth from '../screens/AuthentificationScreen'
export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth : Auth,
    },
    {
      initialRouteName: "Auth"
    }
  )
);