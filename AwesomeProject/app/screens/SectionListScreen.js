import { View, Text, SectionList, StyleSheet } from 'react-native'
import React from 'react'

const SectionListScreen = () => {
  return (
    <View style={styles.container}>
      <SectionList
          sections = {[
              {title:'K', data:['Kasun','Kamal']},
              {title:'L', data:['Lahiru','Lakmal']}
          ]}
          renderItem = {({item}) => <Text style={styles.item}>{item}</Text>} 
          renderSectionHeader = {({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor = {(item,index) => index} 
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
    }

})

export default SectionListScreen