import React, { useEffect } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import AppStack from './AppStack';
import Auth from '../screens/AuthentificationScreen'
import OAuth2RedirectHandler from '../authorization/oauth2/OAuth2RedirectHandler';
// import { NavigationContainer } from '@react-navigation/native';
// const Stack = createStackNavigator();
// export default class Route extends React.Component {
//   constructor(props) {
//     super(props);

//   }
//   componentDidMount() {

//   }
//   componentWillUnmount() {

//   }
//   render() {
//     return (
//       <>
//         <NavigationContainer linking={linking}>
//           <Stack.Navigator>
//             <Stack.Screen  name="Auth" component={Auth} options={{ headerShown: false }}/>
//             <Stack.Screen name="App" component={AppStack} options={{ headerShown: false }}/>
//             <Stack.Screen name="oauth2" component={OAuth2RedirectHandler} options={{ headerShown: false }}/>
//           </Stack.Navigator>
//         </NavigationContainer>

//       </>
//     );
//   }
// }
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