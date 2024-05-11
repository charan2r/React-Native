import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, Image, TextInput, TouchableOpacity,Button,Alert} from 'react-native';

import Navigation from './app/navigation/Navigation';
import FuelNavigation from './app/navigation/FuelNavigation';
import Navigator from './app/tracker/Navigator';
import Account from './app/navigation/Account';
import HomeStack from './app/navigation/HomeStack';

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <FuelNavigation/>
      </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:`#f5f5f5`,
    paddingTop: Platform.OS === 'android' ? 30:0
    
  }
})
