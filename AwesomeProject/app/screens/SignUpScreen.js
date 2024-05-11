import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native'

const SignUpScreen = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const navigation = useNavigation();
  const onSignInPressed = () => {
      navigation.navigate('SignIn');
  }
  const onSignUpPressed = () => {
    navigation.navigate('Home')
}

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.text_footer}>FULLNAME</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="FULLNAME"
                    style={styles.textInput}
                    autoCapitalize="none" 
                />
                </View>
      <Text style={styles.text_footer}>EMAIL</Text>
      <View style={styles.action}>
                <FontAwesome 
                    name="envelope-o"
                    color="#05375a"
                    size={20}
                />      
       <TextInput 
         placeholder='EMAIL'
         style={styles.textInput}
         />
         </View>
    <Text style={styles.text_footer}>PASSWORD</Text>
      <View style={styles.action}>
                <Feather
                    name="lock"
                    color="#05375a"
                    size={20}
                />    
      <TextInput 
          placeholder='PASSWORD' 
          style={styles.textInput}
          secureTextEntry={true}/>
        </View> 
    <Text style={styles.text_footer}>CONFIRM PASSWORD</Text>
      <View style={styles.action}>
                <Feather
                    name="lock"
                    color="#05375a"
                    size={20}
                />   
      <TextInput 
         placeholder='CONFIRM PASSWORD' 
         style={styles.textInput}
         //value={passwordRepeat} 
         //setValue={setPasswordRepeat}
         secureTextEntry={true}/>
         </View>

        
       <Button text='SIGN UP' onPress={onSignUpPressed} type='PRIMARY' />  

       <Button text="Already have an account? Sign in" onPress={onSignInPressed} type='TERTIARY' /> 
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
        paddingTop:70,
        paddingBottom:25
    },
    text_footer: {
      color: '#05375a',
      fontSize: 18
    },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
    },
    textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
    },

});

export default SignUpScreen