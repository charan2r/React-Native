import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'

const SignInScreen = () => {
  const [fuel, setFuel] = useState('');
  const [fueltype, setFueltype] = useState('');
  const [district, setDistrict] = useState('');
  const [town, setTown] = useState('');
  const navigation = useNavigation();
  const onSearchAvailablePressed = () => {
      navigation.navigate("onSearchAvailablePressed");
  }
  

  return (
    <View style={styles.root}>
        
      
      <Text style={styles.space}>Search Area</Text>
      <Text style={styles.full}>Fuel Type</Text>
            <View style={styles.action}>
                <Input 
                   placeholder='Fuel Type' 
                   style={styles.input}
                   value={fuel} 
                   setValue={setFuel}/>
             </View>      
      <Text style={styles.full}>Fuel Sub Types</Text>
            <View style={styles.action}>
                <Input 
                    placeholder='Fuel Sub types' 
                    style={styles.input}
                    value={fueltype} 
                    setValue={setFueltype}/>
            </View>
        <Text style={styles.full}>District</Text>
            <View style={styles.action}>
                <Input 
                    placeholder='District' 
                    style={styles.input}
                    value={district} 
                    setValue={setDistrict}/>
            </View>
        <Text style={styles.full}>Town</Text>
            <View style={styles.action}>
                <Input 
                    placeholder='Town' 
                    style={styles.input}
                    value={town} 
                    setValue={setTown}/>
            </View>

       <Button text='Search Availability' onPress={onSearchAvailablePressed} type='TERTIARY' /> 
       
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
        fontSize:20,
        marginBottom:10,
        fontWeight:'bold',
        color:"black",
        paddingBottom:50,
        paddingTop:30
    },
    image:{
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:8
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

export default SignInScreen