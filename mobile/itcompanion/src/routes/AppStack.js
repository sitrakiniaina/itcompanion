
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
                        name={Platform.OS === 'android' ? 'home' : 'home'}></Icon>
                }} />
            <Drawer.Screen name="A propos" component={DescriptionStack}
                options={{
                    drawerIcon: config => <Icon
                        size={23}
                        name={Platform.OS === 'android' ? 'information-circle' : 'information-circle'}></Icon>
                }} />
            <Drawer.Screen name="Carière" component={CariereStack}
                options={{
                    drawerIcon: config => <Icon
                        size={23}
                        name={Platform.OS === 'android' ? 'business' : 'business'}></Icon>
                }} />
            <Drawer.Screen name="Profile" component={CariereStack}
                options={{
                    drawerIcon: config => <Icon
                        size={24}
                        name={Platform.OS === 'android' ? 'person-circle' : 'person-circle'}></Icon>
                }} />
        </Drawer.Navigator>
    );
}
