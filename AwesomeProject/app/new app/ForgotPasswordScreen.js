import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native'

const ForgotPasswordScreen = () => {
  const [username,setUsername] = useState('');
  const [newpassword,setNewPassword] = useState('');
  const navigation = useNavigation();
  const onSignInPressed = () => {
      navigation.navigate('SignIn');
  }
  const onSubmitPressed = () => {
    navigation.navigate('SignIn');
}
  return (
    
      <View style={styles.root}>
        <Text style={styles.title}>Reset Your Password</Text>
        <Text style={styles.full}>USERNAME</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="gray"
                    size={20}
                />
                <TextInput
                  placeholder='USERNAME' 
                  style={styles.input}
                  />
            </View>
            <Text style={styles.full}>NEW PASSWORD</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="gray"
                    size={20}
                />
                <TextInput 
                    placeholder='NEW PASSWORD' 
                    style={styles.input}
                   
                    secureTextEntry={true}/>
            </View> 
        <Button text="Submit" onPress={onSubmitPressed} type='PRIMARY' />  
        <Button text="Back to Sign in" onPress={onSignInPressed} type='TERTIARY' /> 
       </View>
    
  )
}

const styles = StyleSheet.create({
  root:{
    flex:1,
    alignItems:'stretch',
    padding:15
  },
  title:{
    fontSize:30,
    margin:10,
    fontWeight:'bold',
    color:"black",
    paddingTop:50,
    paddingBottom:25
  },
  full: {
    color: 'gray',
    fontSize: 18,
    paddingTop:10
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  input: {
    flex: 1,
    paddingLeft: 12,
    color: '#05375a',
  },

})

export default ForgotPasswordScreen