import React from 'react';
import { View, Text, Button, StyleSheet, FlatList,Image, ScrollView, StatusBar } from 'react-native';

const names = [
  {
    index:1,
    title:'Lord Of the Rings',
    image:require('../new/assets/images/lotr.jpg')
  },
  {
      index:2,
      title:'The Alchemist',
      image:require('../assets/alchemist-cover.jpg')
  },
  {
      index:3,
      title:'Hooked',
      image:require('../assets/hooked-cover.jpg')
  },
  {
    index:4,
    title:'The Lady of the Lake',
    image:require('../new/assets/images/witcher.jpg')
  },
  {
      index:5,
      title:'Sprint',
      image:require('../assets/sprint-cover.jpg')
  },
  {
      index:6,
      title:'Why Buddhism is True',
      image:require('../assets/wbit-cover.png')
  },
  {
    index:7,
    title:'Underland',
    image:require('../new/assets/images/underland.jpg')
  },
  {
    index:8,
    title:'C How to Program',
    image:require('../new/assets/images/howto.jpg')
  },
  {
    index:9,
    title:'The Tiny Dragon',
    image:require('../new/assets/images/the_tiny_dragon.jpg')
  },
  {
    index:10,
    title:'Campbell Biology',
    image:require('../new/assets/images/biology.jpg')
  },
  {
    index:11,
    title:'Adventures of Sherlock Holmes',
    image:require('../new/assets/images/sh.jpg')
  },
  {
    index:12,
    title:'Zoology',
    image:require('../new/assets/images/zoology.jpg')
  },

];
const Item = ({ item }) => (
  <View style={styles.item}>
    <View style={styles.imageContainer}>
      <Image source={item.image} style={styles.images}/>
           
    </View>
    <Text style={styles.title}>{item.title}</Text>
  </View>
);

const DetailsScreen = ({navigation}) => {
    return (
      <ScrollView>
      <View style={styles.container}>
      <FlatList
          data = {names}
          renderItem = {Item}
          keyExtractor={item => item.id}
         
      > 
      </FlatList>
    </View>
    </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    
  },
  item:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:14
  },
  imageContainer:{
    
    borderRadius:100,
    height:90,
    width:90,
    justifyContent:'center',
    alignItems:'center'
  },
  images:{
    height:105,
    width:70
  },
  name:{
    fontWeight:'bold',
    fontSize:16,
    marginLeft:14
  },
  title: {
    fontSize: 18,
  },
});


export default DetailsScreen;

