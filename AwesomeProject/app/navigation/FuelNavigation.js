import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen2 from '../new app/SignInScreen2';
import SignUpScreen2 from '../new app/SignUpScreen2';
import ForgotPasswordScreen from '../new app/ForgotPasswordScreen';
import DashboardScreen from '../new app/DashboardScreen';
import FuelTypeScreen from '../new app/FuelTypeScreen';
import PetrolScreen from '../new app/PetrolScreen';
import DieselScreen from '../new app/DieselScreen';
import KerosineScreen from '../new app/KerosineScreen';
import LPGasScreen from '../new app/LPGasScreen';
import SearchScreen from '../new app/SearchScreen';

const Stack = createNativeStackNavigator();

const FuelNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='SignIn' component={SignInScreen2}/>
        <Stack.Screen name='SignUp' component={SignUpScreen2}/>
        <Stack.Screen name='Forgot Password?' component={ForgotPasswordScreen}/>
        <Stack.Screen name='Dashboard' component={DashboardScreen}/>
        <Stack.Screen name='FuelType' component={FuelTypeScreen}/>
        <Stack.Screen name='Petrol' component={PetrolScreen}/>
        <Stack.Screen name='Diesel' component={DieselScreen}/>
        <Stack.Screen name='Kerosine' component={KerosineScreen}/>
        <Stack.Screen name='LPGas' component={LPGasScreen}/>
        <Stack.Screen name='Search' component={SearchScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default FuelNavigation