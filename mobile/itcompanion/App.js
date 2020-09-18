/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

// import Navigation from './src/navigations/Navigation';
import AppNavigator from './src/routes/RouteStack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

function App() {
  useEffect(() => {
    //metier
    SplashScreen.hide();
  }, [])

  return (
    <>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>     
    </>
  );
};
export default App;
