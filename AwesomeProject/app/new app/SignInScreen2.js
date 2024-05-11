import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'

const SignInScreen2 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const onLoginPressed = () => {
      navigation.navigate("Dashboard");
  }
  const onForgotPasswordPressed = () => {
    navigation.navigate("Forgot Password?")
}
  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
}

  return (
    <View style={styles.root}>
         <View style={styles.image}>
              <Image style={styles.logo} source={require("../assets/fuel2.jpg")}/>
            </View>
      <Text style={styles.login}>Login</Text>
      <Text style={styles.space}>Please sign in to continue</Text>
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
        color:"black",
        paddingBottom:5
    },
    space:{
        fontSize:15,
        marginBottom:10,
        fontWeight:'bold',
        color:"black",
        paddingBottom:5
    },
    image:{
        paddingTop:10,
        alignItems:'center',
        paddingBottom:10
    },
    logo:{
        width:220,
        height:220,
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

export default SignInScreen2