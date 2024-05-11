import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import MainTabScreen from '../book app/MainTabScreen';
import BookDetails from '../book app/BookDetails'
import BookDetails2 from '../book app/BookDetails2';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='SignIn' component={SignInScreen}/>
        <Stack.Screen name='SignUp' component={SignUpScreen}/>
        <Stack.Screen name='Home' component={MainTabScreen}/>
        <Stack.Screen name='BookDetails' component={BookDetails}/>
        <Stack.Screen name='BookDetails2' component={BookDetails2}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation