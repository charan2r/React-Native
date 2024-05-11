import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const BookDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lady of the Lake</Text>
      <Image style={styles.image} source={require("../new/assets/images/witcher.jpg")}/>
      <Text style={styles.text}>** It is the seventh book in The Witcher series and the fifth novel in the saga. It continues the story from The Tower of the Swallow.</Text>
      <Text style={styles.text}>* It was first written in Polish language by Andrzej Sapkowski. But now it is translated to over 200 languages.</Text>
      <Text style={styles.text}> The Book has a user rating of 4.8 and 25k have readed this book so far. It is one of the best selling fiction type novel.</Text>
    </View>
  )
  }
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:'black'
  },
  header:{
    fontSize:30,
    color:'white',
    paddingBottom:20,
    paddingTop:30
  },
  image:{
    paddingTop:50,
    alignItems:'center',
    paddingBottom:50,
    width:150,
    height:250,
  },
  text:{
    fontSize:20,
    justifyContent:'center',
    color:'white',
    paddingBottom:10,
    paddingTop:20
  }

})

export default BookDetails