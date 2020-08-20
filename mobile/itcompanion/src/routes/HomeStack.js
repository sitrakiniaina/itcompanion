import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from '../shared/Header';
import Home from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DrawerActions } from '@react-navigation/native';

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
            <Header title="Actualités" hasBackButton={false} navigation={navigation} />
          )
        })}
      />
    </Stack.Navigator>

  );
}



