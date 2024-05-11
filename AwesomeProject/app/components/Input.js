import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const input = ({value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput 
       value={value}
       onChangeText={setValue}
       placeholder={placeholder}
       secureTextEntry={secureTextEntry}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:'100%',
        borderColor:'white',
        borderRadius:8,
        borderWidth:7,
        paddingHorizontal:10,
        marginVertical:5,
        
    },

})

export default input