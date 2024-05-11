import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const KerosineScreen = () => {
    const navigation = useNavigation();
    const onSearchPressed = () => {
        navigation.navigate("Search");
    }
  return (
    <View style={styles.container}>
         <View style={styles.image}>
              <Image style={styles.logo} source={require("../assets/ke.jpg")}/>
            </View>
      <Text style={styles.text}># Kerosene, also spelled kerosine, also called paraffin or paraffin oil, flammable hydrocarbon liquid commonly used as a fuel.   
      </Text>
      <Text style={styles.text}>* Kerosene is typically pale yellow or colourless and has a not-unpleasant characteristic odour.</Text>
      <Text style={styles.text}>** It is obtained from petroleum and is used for burning in kerosene lamps and domestic heaters or furnaces, as a fuel or fuel component for jet engines, and as a solvent for greases and insecticides.</Text>
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
        paddingTop:20,
        justifyContent:'center',
        alignItems:'center'
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

export default KerosineScreen