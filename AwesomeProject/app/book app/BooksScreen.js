import { View, Text, StyleSheet, FlatList, ScrollView, Image } from 'react-native'
import React from 'react'

const BooksScreen = () => {
    const names = [
        {
            index:1,
            name:'science',
            //image:require('../assets/alchemist-cover.jpg')
        },
        {
            index:2,
            name:'history',
            //image:require('../assets/hooked-cover.jpg')
        },
        {
            index:3,
            name:'history',
            //image:require('../assets/sprint-cover.jpg')
        },
        {
            index:4,
            name:'history',
            //image:require('../assets/wbit-cover.png')
        }

    ];
   
  return (
    <ScrollView>
      <FlatList
      
      keyExtractor={(key) => {
        return key.index;
      }}
      horizontal
      inverted
      
      showsHorizontalScrollIndicator={false}
      data={names}
      renderItem={({ item }) => {
        console.log(item.name);
        return <Text> {item.name} </Text>;
      }}
    />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    seperator:{
        height:1,
        width:'100%',
        backgroundColor:'black'
         
    },
    item:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:14
    },
    imageContainer:{
        backgroundColor:'black',
        borderRadius:100,
        height:90,
        width:90,
        justifyContent:'center',
        alignItems:'center'
    },
    images:{
        height:55,
        width:55
    },
    name:{
        fontWeight:'bold',
        fontSize:16,
        marginLeft:14
    }
    

});
export default BooksScreen;