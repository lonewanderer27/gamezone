import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import ReviewDetail from '../pages/ReviewDetail';
import { ReviewType } from '../types';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{
            headerStyle: {
                backgroundColor: '#eee',
            },
            headerTintColor: '#444',
        }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ReviewDetail" component={ReviewDetail} />
        </Stack.Navigator>
    );
}

export type RootStackParamList = {
    Home: undefined;
    ReviewDetail: { review: ReviewType };
}

export default HomeStack;