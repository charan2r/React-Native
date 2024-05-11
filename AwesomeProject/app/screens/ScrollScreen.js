import { View, Text, StyleSheet,ScrollView, Image, StatusBar } from 'react-native'
import React from 'react'

const ScrollScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Super Cars</Text>
      <View style={styles.image}>
            <Image source={require('../assets/car.jpg')}/>
      </View>
      <Text style={styles.text}>
      * A supercar, also called exotic car is a loosely defined description of street-legal, high-performance sports cars. 
      Since the 2000s or 2010s, the term hypercar has come into use for the highest performing supercars.
       Supercars commonly serve as the flagship model within a vehicle manufacturer's line-up of sports cars and typically feature various performance-related technology derived from motorsports.
       In the United States, muscle cars were often referred to as "supercars" during the 1960s.
       The Lamborghini Miura, produced from 1966 - 1973, is often said to be the first supercar.
       A more recent term for high-performance sportscars is "hypercar", which is sometimes used to describe the highest performing supercars. As per supercars, there is no set definition for what constitutes a hypercar. 
       An attempt to define these is "a limited-production, top-of-the-line supercar with a price of around or more than US$1 million.
       With a recent shift towards electrification, many recent hypercars use a hybrid drivetrain, a trend started in 2013 by the McLaren P1, Porsche 918 Spyder, and LaFerrari, then continued in 2016 with the Koenigsegg Regera, in 2017 with the Mercedes-AMG One, and in 2019 with the Ferrari SF90 Stradale and McLaren Speedtail.
      </Text>

    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'gray',
        marginHorizontal:20
    },
    image:{
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:40,
        paddingTop:20,
    },
    title:{
        fontSize:30,
        alignItems:'center',
        justifyContent:'center',
        paddingTop:20,
        paddingLeft:80
    },
    text:{
        fontSize:20,
        justifyContent:'center',
        alignItems:'center'
    }

})

export default ScrollScreen
