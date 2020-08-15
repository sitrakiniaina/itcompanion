/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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
function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>     
    </>
  );
};
export default App;
