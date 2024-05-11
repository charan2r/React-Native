import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { circle } from 'react-native/Libraries/Animated/Easing'

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
            <Text style={styles.text_header}>D-Caller</Text>
            <View style={styles.image}>
              <Image style={styles.logo} source={require("../assets/caller2.jpeg")}/>
            </View>
            <Text style={styles.footer}>No long Registration</Text>
            <Text style={styles.footer2}>No Paid Features</Text>
            <View style={styles.circles}>
              <View style={styles.circle}></View>
              <View style={styles.circle2}></View>
              <View style={styles.circle3}></View>
              <View style={styles.circle4}></View>
            </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'snow',
        justifyContent:'center'
    },
    header: {
          flex: 1,
          paddingTop:50,
          paddingHorizontal: 20,
          paddingBottom: 60,
          alignItems:'center'
    },
    footer: {
          fontSize:16, 
    },
    footer2: {
        fontSize:16,
        paddingBottom:50,
  },
    text_header: {
          color: 'black',
          fontWeight: 'bold',
          fontSize: 30,
          paddingTop:50,
          alignItems:'center'
    },
    image:{
        paddingTop:60,
        alignItems:'center',
        paddingBottom:60
    },
    logo:{
        width:220,
        height:220,
    },
    circle:{
        width:12,
        height:12,
        backgroundColor:'black',
        borderWidth:2,
        borderRadius:7,
        marginRight:4      
    },
    circle2:{
        width:12,
        height:12,
        backgroundColor:'gray',
        borderWidth:0,
        borderRadius:7,
        marginRight:4      
    },
    circle3:{
        width:12,
        height:12,
        backgroundColor:'gray',
        borderWidth:0,
        borderRadius:7,
        marginRight:4      
    },
    circle4:{
        width:12,
        height:12,
        backgroundColor:'gray',
        borderWidth:0,
        borderRadius:7,
        marginRight:4      
    },
    circles:{
        flexDirection:'row',
    }

})

export default MainScreen