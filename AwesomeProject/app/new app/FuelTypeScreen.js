import { View, Text, Button, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const FuelTypeScreen = () => {
    const navigation = useNavigation();
    const onPetrolPressed = () => {
        navigation.navigate('Petrol');
    }
    const onDieselPressed = () => {
        navigation.navigate('Diesel');
    }
    const onKerosinePressed = () => {
        navigation.navigate('Kerosine');
    }
    const onLPPressed = () => {
        navigation.navigate('LPGas');
    }
  return (
    <View>
      <Text style={{fontSize:25, alignSelf:'center', paddingBottom:40, paddingTop:30}}>Fuel Types</Text> 
      <Text style={{fontSize:20, alignSelf:'center', paddingBottom:50, paddingTop:20}}>You can get to know about the details about thses fuel types. Just touch the button.</Text>
      <View style={styles.image}>
              <Image style={styles.logo} source={require("../assets/fuel3.png")}/>
            </View>
      <Button title='Petrol' onPress={onPetrolPressed}/>
      <Button title='Diesel' onPress={onDieselPressed}/>
      <Button title='Kerosine' onPress={onKerosinePressed}/>
      <Button title='LP Gas' onPress={onLPPressed}/>
    </View>
  )
  
}
const styles = StyleSheet.create({
  image:{
    paddingTop:10,
    alignItems:'center',
    paddingBottom:50
  },
  logo:{
    width:220,
    height:220,
  },
})

export default FuelTypeScreen