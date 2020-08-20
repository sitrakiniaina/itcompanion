
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import DrawerContent from '../shared/DrawerContent';
import HomeStack from './HomeStack';
import DescriptionStack from './DescriptionStack';
import CariereStack from './CariereStack';
const Drawer = createDrawerNavigator();
export default function AppStack() {
    return (
        <Drawer.Navigator initialRouteName="Home"
            drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={HomeStack}
                options={{
                    drawerIcon: config => <Icon
                        size={23}
                        name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}></Icon>
                }} />
            <Drawer.Screen name="Description" component={DescriptionStack}
                options={{
                    drawerIcon: config => <Icon
                        size={23}
                        name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}></Icon>
                }} />
            <Drawer.Screen name="Carière" component={CariereStack}
                options={{
                    drawerIcon: config => <Icon
                        size={23}
                        name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}></Icon>
                }} />
        </Drawer.Navigator>
    );
}
