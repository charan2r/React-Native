import React from 'react';
import { Text, View, StyleSheet, Button, Alert, Image } from 'react-native';
import Tasks from './Tasks';

function TodoList(props) {
    return (
        <View style={styles.container}>
         <View style={styles.tasks}>
                <Text style={styles.section}>To  Do  List</Text>
                <View style={styles.image}>
                    <Image source={{
                       width:180,
                       height:160,
                       marginBottom:50,
                       padding:40,
                       alignItems:"center",
                       uri:"https://picsum.photos/id/20/200/300"
                }}/>
                </View>
                <View style={styles.button}>
                      <Button
                         title="Add"
                         onPress={() => Alert.alert('Changes are Saved')}>
                      </Button>
                      <Button
                         title="Save"
                         onPress={() => Alert.alert('You are going to add a new task!')}>
                      </Button>
                </View>
                <View style={styles.items}>
                  <Tasks text={'Task 1'}/>
                  <Tasks text={'Task 2'}/>
                  <Tasks text={'Task 3'}/>
                  <Tasks text={'Task 4'}/>
                  <Tasks text={'Task 5'}/>
                </View>
            </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{ 
       flex:1
    },
    tasks:{
        paddingTop:40,
        paddingHorizontal:20
      },
      section:{
        fontSize:24,
        marginBottom:10,
        fontWeight:'bold',
        color:"darkblue"
      },
      image:{
        justifyContent:'center',
        alignItems:'center'
      },
      button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:10,
      },
      items:{
        marginTop:30,
      }   
})

export default TodoList;