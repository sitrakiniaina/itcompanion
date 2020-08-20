import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from '../shared/Header';
import DescriptionScreen from '../screens/DescriptionScreen';

const Stack = createStackNavigator();
function DescriptionStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeTest"
                component={DescriptionScreen}
                options={({ navigation }) => ({
                    header: () => (
                        <Header title="Descriptionstest" hasBackButton={false} navigation={navigation} />
                    )
                })}
            />
        </Stack.Navigator>
    );
}
export default DescriptionStack;


