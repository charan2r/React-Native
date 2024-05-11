import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';

const Stack = createStackNavigator();

const screenOptionStyle ={
    headerShown : false
}


const HomeStackNavigator = () =>{
    return(
        <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen 
                name="Home"
                component={Home}
            />
        </Stack.Navigator>
        </NavigationContainer>
    )
}


export default HomeStackNavigator;