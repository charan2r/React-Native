import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const DieselScreen = () => {
    const navigation = useNavigation();
    const onSearchPressed = () => {
        navigation.navigate("Search");
    }
  return (
    <View style={styles.container}>
         <View style={styles.image}>
              <Image style={styles.logo} source={require("../assets/diesel.jpg")}/>
            </View>
      <Text style={styles.text}>Diesel fuel, also called diesel oil, combustible liquid used as fuel for diesel engines, ordinarily obtained from fractions of crude oil that are less volatile than the fractions used in gasoline.
        </Text>
        <Text style={styles.text}>** In diesel engines the fuel is ignited not by a spark, as in gasoline engines, but by the heat of air compressed in the cylinder, with the fuel injected in a spray into the hot compressed air.</Text>
        <Button title='Search' onPress={onSearchPressed} />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    text:{
        fontSize:20,
        paddingTop:20
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


})

export default DieselScreen