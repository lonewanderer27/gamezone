import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import ReviewDetail from '../pages/ReviewDetail';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function Appstack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ReviewDetail" component={ReviewDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export type RootStackParamList = {
    Home: undefined;
    ReviewDetail: undefined;
}

export default Appstack;