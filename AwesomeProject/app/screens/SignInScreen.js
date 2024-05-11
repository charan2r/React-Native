import { View, Text, StyleSheet, Image,TextInput } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const onLoginPressed = () => {
      navigation.navigate("Home");
  }
  const onForgotPasswordPressed = () => {
    console.warn('Login');
}
  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
}

  return (
    <View style={styles.root}>
        <View style={styles.image}>
                    <Image source={{
                       width:190,
                       height:180,
                       marginBottom:50,
                       padding:40,
                       alignItems:"center",
                       uri:"https://picsum.photos/id/20/200/300"
                }}/>
                </View>
      <Text style={styles.login}>Login</Text>
      <Text style={styles.space}>Please sign in to continue</Text>
      <Text style={styles.text_footer}>EMAIL</Text>
      <View style={styles.action}>
                <FontAwesome 
                    name="envelope"
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
                <FontAwesome
                    name="lock"
                    color="#05375a"
                    size={20}
                />   
      <TextInput 
          placeholder='PASSWORD' 
          style={styles.textInput}
          secureTextEntry={true}/>
         </View> 

       <Button text='Forgot Password?' onPress={onForgotPasswordPressed} type='TERTIARY' /> 
       <Button text='LOGIN' onPress={onLoginPressed} type='PRIMARY' />  

       <Button text="Don't have an account? Sign up" onPress={onSignUpPressed} type='TERTIARY' /> 
    </View>
    
  )
}

const styles = StyleSheet.create({
    root:{
        flex:1,
        alignItems:'stretch',
        padding:15
    },
    login:{
        fontSize:30,
        marginBottom:10,
        fontWeight:'bold',
        color:"black"
    },
    space:{
        fontSize:15,
        marginBottom:10,
        fontWeight:'bold',
        color:"black",
        paddingBottom:25
    },
    image:{
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:50
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

export default SignInScreen