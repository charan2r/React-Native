import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const PetrolScreen = () => {
    const navigation = useNavigation();
    const onSearchPressed = () => {
        navigation.navigate("Search");
    }
  return (
    <View style={styles.container}>
         <View style={styles.image}>
              <Image style={styles.logo} source={require("../assets/pe.jpg")}/>
            </View>
      <Text style={styles.text}> # Gasoline, also called gas or petrol, mixture of volatile, flammable liquid hydrocarbons derived from petroleum and used as fuel for internal-combustion engines.
        </Text>
        <Text style={styles.text}>  Originally a by-product of the petroleum industry gasoline became the preferred automobile fuel because of its high energy of combustion and capacity to mix readily with air in a carburetor.
        </Text>
        <Text style={styles.text}> *It is available as Octane 92 and 95.</Text>
        <Button style={styles.new} title='Search' onPress={onSearchPressed} />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    text:{
        fontSize:20,
        paddingTop:20,
    },
    image:{
        paddingTop:10,
        alignItems:'center',
        paddingBottom:10
    },
    logo:{
        width:220,
        height:220,
    }
})

export default PetrolScreen