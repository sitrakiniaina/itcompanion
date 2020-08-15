
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import DescriptionStack from './DescriptionStack';
const Drawer = createDrawerNavigator();
export default function AppStack() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home"  component={HomeStack} />
            <Drawer.Screen name="Description" component={DescriptionStack} />
        </Drawer.Navigator>
    );
}
