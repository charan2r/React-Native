import React from 'react';
import {View,Image,Text,TextInput,TouchableOpacity, StyleSheet} from 'react-native';

function Ousl(props) {
    return (
    <View>
     <View style={styles.image}>
        <Image source={{
          width:150,
          height:220,
          marginBottom:50,
          padding:50,
          alignItems:"center",
          uri:"https://www.aaou.org/wp-content/uploads/2021/03/Logo-OUSL-tnsp-1.png"
        }}/>
      </View>
      <Text style={styles.description}>Faculty of Enginnering</Text>
      <Text style={styles.description2}>Bachelor of Software Engineering</Text>
      <Text style={styles.description3}>The Open University of Sri Lanka</Text>
      <TextInput style={styles.input} placeholder="Enter your name here"/>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.userButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      </View>
    </View> 
    );
}

const styles = StyleSheet.create({
      image:{
        justifyContent:'center',
        alignItems:'center'
      },
      description:{
        fontSize:15,
        textAlign:'center',
        margin:5,
        color:"white"
      },
      description2:{
        fontSize:18,
        textAlign:'center',
        margin:5,
        color:"white"
      },
      description3:{
        fontSize:20,
        textAlign:'center',
        margin:5,
        color:"white"
      },
      input:{
        width:"90%",
        backgroundColor:"white",
        padding:15,
        marginBottom:10
      },
      userButton:{
        backgroundColor:'#ffd700',
        padding:15,
        width:"100%"
      },
      buttonText:{
        fontSize:18,
        textAlign:'center'
      },
      buttonContainer:{
        flexDirection:'row',
        width:"50%"
      }
})

export default Ousl;