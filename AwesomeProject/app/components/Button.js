import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const Button = ({onPress,text, type, test}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]} >
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        padding:15,
        marginVertical:8,
        alignItems:'center',
        borderRadius:10,
        paddingTop:50
     },
     container_PRIMARY:{
         backgroundColor:'orange',
         paddingTop:20
         
     },
     container_TERTIARY:{
        backgroundColor:'#f5f5f5',
        paddingTop:20
    },
     text:{
         fontWeight:'bold',
         color:'white',
     },
     text_PRIMARY:{
        fontSize:18
     },
     text_TERTIARY:{
         color:'orange'
     }
     
     
})

export default Button