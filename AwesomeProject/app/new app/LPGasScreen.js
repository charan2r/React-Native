import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const LPGasScreen = () => {
    const navigation = useNavigation();
    const onSearchPressed = () => {
        navigation.navigate("Search");
    }
  return (
    <View style={styles.container}>
         <View style={styles.image}>
              <Image style={styles.logo} source={require("../assets/lp.jpg")}/>
            </View>
      <Text style={styles.text}>** liquefied petroleum gas (LPG), also called LP gas, any of several liquid mixtures of the volatile hydrocarbons propene, propane, butene, and butane.  
      </Text>
      <Text style={styles.text}> # It was used as early as 1860 for a portable fuel source, and its production and consumption for both domestic and industrial use have expanded ever since.</Text>
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
        paddingBottom:40
    },
    logo:{
        width:220,
        height:220,
    },


})

export default LPGasScreen 