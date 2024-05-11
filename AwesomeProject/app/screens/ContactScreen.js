import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ContactScreen = () => {
  const navigation = useNavigation();
  const onHomePressed = () => {
      navigation.navigate('Home');
  }
  return (
    <View>
      <Text style={{fontSize:25, alignSelf:'center', paddingBottom:40, paddingTop:30}}>Contact Us</Text> 
      <Button title='Home' onPress={onHomePressed}/>
    </View>
  )
}

export default ContactScreen