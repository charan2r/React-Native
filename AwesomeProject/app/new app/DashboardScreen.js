import { View, Text, Button, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native';

const DashboardScreen = () => {
  const navigation = useNavigation();
  const onFuelPressed = () => {
      navigation.navigate('FuelType');
  }
  return (
    <View>  
      <Text style={{fontSize:30, alignSelf:'center', paddingBottom:40, paddingTop:30}}>Dashboard</Text> 
      <Text style={{fontSize:24, alignSelf:'center', paddingBottom:10, paddingTop:10, color:'red'}}>Your Own Fuel Tracker</Text> 
      <Text style={{fontSize:18, alignSelf:'center', paddingBottom:10, paddingTop:10, fontWeight:'bold'}}>Easy and Fast</Text> 
      <View style={styles.image}>
              <Image style={styles.logo} source={require("../assets/fuel.jpg")}/>
            </View>
      <Button title='Fuel' onPress={onFuelPressed}/>
      <Button title='Live Queue Map'/>
      <Button title='Notifications' />
    </View>
  )
}
const styles = StyleSheet.create({
    image:{
        paddingTop:50,
        alignItems:'center',
        paddingBottom:80
    },
    logo:{
        width:220,
        height:220,
    },
})

export default DashboardScreen