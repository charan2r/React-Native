import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

function ImageScreen(props) {
    return (
        <View style={styles.container}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
        <Image
         resizeMode='contain'
         style={styles.image}
         source={require("../assets/chair.jpg")}/>
         </View>
    );
}
const styles = StyleSheet.create({
    closeIcon:{
        width:50,
        height:50,
        backgroundColor:"#fc5c65",
        position:'absolute',
        top:30,
        left:30
    },
    deleteIcon:{
        width:50,
        height:50,
        backgroundColor:"cyan",
        position:'absolute',
        top:30,
        right:30
    },
    container:{
        backgroundColor:'black',
        flex:1
    },
    image:{
        width:"100%",
        height:"100%"
    }
    
})

export default ImageScreen;