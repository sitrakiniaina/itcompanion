import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from '../shared/Header';
import CariereScreen from '../screens/CariereScreen';
import StageScreen from '../screens/Cariere/StageScreen';
import EmploieScreen from '../screens/Cariere/EmploieScreen';
const Stack = createStackNavigator();
function CariereStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Cariere"
                component={CariereScreen}
                options={({ navigation }) => ({
                    header: () => (
                        <Header title="Carières"  enableDrawer={true} hasBackButton={true} navigation={navigation} />
                    )
                })}
            />
        </Stack.Navigator>
    );
}

function TabAScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="TabA Home" component={StageScreen} />
            <Stack.Screen name="TabA Details" component={EmploieScreen} />
        </Stack.Navigator>
    );
}
export default CariereStack;


