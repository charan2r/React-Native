import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const BookDetails2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Underland</Text>
      <Image style={styles.image} source={require("../new/assets/images/underland.jpg")}/>
      <Text style={styles.text}>** It Tells the story of a boy named Gregor and his adventures in the Underland, a subterranean world located under New York City.</Text>
      <Text style={styles.text}>* It was written by Robert McFarlane which is a adventure type book.</Text>
      <Text style={styles.text}> Book has a user rating of 4.0 and 10k have readed this book for now.</Text>
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
    height:220,
  },
  text:{
    fontSize:20,
    color:'white',
    paddingBottom:10,
    paddingTop:20
  }

})

export default BookDetails2