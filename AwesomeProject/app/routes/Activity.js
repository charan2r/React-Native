import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'

const Activity = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='small' color='black'/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    }
    

})

export default Activity