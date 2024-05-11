import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native'

function Tasks(props) {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circle}></View>
        </View>
    );
}
const styles = StyleSheet.create({
    item:{
        backgroundColor:'white',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20
    },
    square:{
        width:24,
        height:24,
        opacity:0.3,
        backgroundColor:'lightgray',
        borderRadius:5,
        marginRight:15
    },
    itemLeft:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
    },
    itemText:{
        maxWidth:'90%',
        fontWeight:'bold',
        color:"darkblue",
        fontSize:17
    },
    circle:{
        width:12,
        height:12,
        borderColor:'red',
        borderWidth:2,
        borderRadius:5,
        marginBottom:20
    }

    
})

export default Tasks;