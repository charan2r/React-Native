import { View, Text, SectionList, StyleSheet, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';


const CategoryScreen = () => {
  const theme = useTheme();
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle= { theme.light ? "light-content" : "dark-content" }/>
      <View style={styles.containers}>
      <Text style={styles.text}>Book Categories</Text>
      </View>
      <SectionList
          sections = {[
              {title:'Technology', data:['1. C How to Program','2. Python Basics', '3. The Innovators']},
              {title:'Science', data:['1. Marine Biology','2. Nano Technonlogy', '3. Zoology', '4. Campbell Biology']},
              {title:'Languages', data:['1. Short Stories','2. Learn any Language']},
              {title:'Novels', data:['1. Sherlock Holmes','2. Jane Ayre', '3. Heart of Darkness','4. Underland','5. The Alchemist']},
              {title:'Astronomy', data:['1. Astonomy Basics']},
              {title:'Fantasy', data:['1. The Dune','2. Lord of the Rings', '3. The Witcher', '4. Wheel of Time']},
              {title:'Short Stories', data:['1. Hooked','2. Why Buddhism is true','3. The Tiny Dragon']},
          ]}
          renderItem = {({item}) => <Text style={styles.item}>{item}</Text>} 
          renderSectionHeader = {({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor = {(item,index) => index} 
      />
    </ScrollView>
   
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:25
    },
    item:{
        padding:10,
        fontSize:18,
        height:44
    },
    sectionHeader:{
        paddingTop:2,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:2,
        fontSize:20,
        fontWeight:'bold'
    },
    text:{
      fontSize:20,
      paddingBottom:15,
      color:'red'
    },
    containers:{
      alignItems:'center'
    }

})

export default CategoryScreen