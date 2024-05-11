import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const FlatListScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
          data={[
              {key:'Kasun'},
              {key:'Nimal'},
              {key:'Amal'},
              {key:'Kamal'},
              {key:'Ajith'},
              {key:"Vijay"}
          ]}
          renderItem = {({item}) => <Text style={styles.item}>{item.key}</Text>} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:25
    },
    item:{
        padding:10,
        fontSize:20,
        height:44
    }
})

export default FlatListScreen