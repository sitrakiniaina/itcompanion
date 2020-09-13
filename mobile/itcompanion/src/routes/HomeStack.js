import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from '../shared/Header';
import Home from '../screens/HomeScreen';
import Calendrier from '../screens/Calendrier/CalendrierScreen';
import CalendrierDetails from '../screens/Calendrier/CalendrierDetailScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from '@react-navigation/native';
import Map from '../screens/Map/MapScreen'
const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          header: () => (
            <Header title="Accueil" enableDrawer={true} hasBackButton={false} navigation={navigation} />
          )
        })}
      />
      <Stack.Screen
        name="Calendrier"
        component={Calendrier}
        options={({ navigation }) => ({
          header: () => (
            <Header title="Calendrier" enableDrawer={false} hasBackButton={true} navigation={navigation} />
          )
        })}
      />
      <Stack.Screen
        name="CalendrierDetails"
        component={CalendrierDetails}
        options={({ navigation }) => ({
          header: () => (
            <Header title="CalendrierDetails" enableDrawer={false} hasBackButton={true} navigation={navigation} />
          )
        })}
      />
      <Stack.Screen
        name="Map"
        component={Map}
        options={({ navigation }) => ({
          header: () => (
            <Header title="Map" enableDrawer={true} hasBackButton={true} navigation={navigation} />
          )
        })}
      />
    </Stack.Navigator>

  );
}



