import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from '../shared/Header';
import Home from '../screens/HomeScreen';
import Calendrier from '../screens/Calendrier/CalendrierScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from '@react-navigation/native';
import Map from '../screens/Map/MapScreen'

// const HomeStack = createStackNavigator({
//   HomeScreen: {
//     screen: Home,
//     navigationOptions: ({ navigation }) => {
//       return {
//         header: () => (
//           <Header title="Home" hasBackButton={false} navigation={navigation} />
//         )
//       };
//     }
//   }
// });
const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          header: () => (
            <Header title="Actualités" hasBackButton={true} navigation={navigation} />
          )
        })}
      />
      <Stack.Screen
        name="Calendrier"
        component={Calendrier}
        options={({ navigation }) => ({
          header: () => (
            <Header title="Calendrier" hasBackButton={true} navigation={navigation} />
          )
        })}
      />
      <Stack.Screen
        name="Map"
        component={Map}
        options={({ navigation }) => ({
          header: () => (
            <Header title="Map" hasBackButton={true} navigation={navigation} />
          )
        })}
      />
    </Stack.Navigator>

  );
}



