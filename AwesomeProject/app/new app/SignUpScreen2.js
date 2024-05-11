import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Input from '../components/Input'
import Button from '../components/Button'

import { useNavigation } from '@react-navigation/native'

const SignUpScreen2 = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const navigation = useNavigation();
  const onSignInPressed = () => {
      navigation.navigate('SignIn');
  }
  const onSignUpPressed = () => {
    navigation.navigate('Dashboard')
}

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Create Account</Text>
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
        
        <Text style={styles.full}>EMAIL</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="envelope-o"
                    color="gray"
                    size={20}
                />     
                <TextInput 
                   placeholder='EMAIL' 
                   style={styles.input}
                   />
             </View>      
      <Text style={styles.full}>PASSWORD</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="gray"
                    size={20}
                />
                <TextInput 
                    placeholder='PASSWORD' 
                    style={styles.input}
                    secureTextEntry={true}/>
            </View>  
      <Text style={styles.full}>CONFIRM PASSWORD</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="gray"
                    size={20}
                />    
                <TextInput 
                    placeholder='CONFIRM PASSWORD' 
                    style={styles.input}
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

export default SignUpScreen2