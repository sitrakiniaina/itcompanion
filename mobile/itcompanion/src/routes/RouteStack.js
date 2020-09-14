import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AppStack from './AppStack';
import Auth from '../screens/AuthentificationScreen'
import OAuth2RedirectHandler from '../authorization/oauth2/OAuth2RedirectHandler';

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: Auth,
      oauth2: OAuth2RedirectHandler,
    },
    {
      initialRouteName: "Auth"
    }
  )
);