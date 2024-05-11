import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Input from '../components/Input'
import Button from '../components/Button'

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
      <Text style={styles.full}>FULL NAME</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="gray"
                    size={20}
                />
                <Input
                  placeholder='FULL NAME' 
                  style={styles.input}
                  value={fullname} 
                  setValue={setFullname}/>
            </View>
        
        <Text style={styles.full}>EMAIL</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="envelope-o"
                    color="gray"
                    size={20}
                />     
                <Input 
                   placeholder='EMAIL' 
                   style={styles.input}
                   value={email} 
                   setValue={setEmail}/>
             </View>      
      <Text style={styles.full}>PASSWORD</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="gray"
                    size={20}
                />
                <Input 
                    placeholder='PASSWORD' 
                    style={styles.input}
                    value={password} 
                    setValue={setPassword}
                    secureTextEntry={true}/>
            </View>  
      <Text style={styles.full}>CONFIRM PASSWORD</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="gray"
                    size={20}
                />    
                <Input 
                    placeholder='CONFIRM PASSWORD' 
                    style={styles.input}
                    value={passwordRepeat} 
                    setValue={setPasswordRepeat}
                    secureTextEntry={true}/>
            </View>        

        
       <Button text='SIGN UP' onPress={onSignUpPressed}  type='PRIMARY' />  

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

});

export default SignUpScreen