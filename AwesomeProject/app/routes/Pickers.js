import { View, Text, Picker, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Pickers = () => {
    const [selectedValue,setSelectedValue] = useState("");
  return (
    <View style={styles.container}>
      <Picker
          selectedValue = {selectedValue}
          style = {{height:50, width:150}}
          onValueChange = {(itemValue) => setSelectedValue(itemValue)} >

          <Picker.item label='Mobile App Development' value='Mobile'/>
          <Picker.item label='Web Technology' value='Web'/>
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:30,
        alignItems:'center'
    }

})

export default Pickers