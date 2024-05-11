import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation();
  const onContactPressed = () => {
      navigation.navigate('Contact');
  }
  return (
    <View>
      <Text style={{fontSize:25, alignSelf:'center', paddingBottom:40, paddingTop:30}}>Home</Text> 
      <Button title='Contact Us' onPress={onContactPressed}/>
    </View>
  )
}

export default HomeScreen