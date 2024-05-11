import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';

const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      <View style={styles.container}>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <Text style={styles.text}>Welcome to your online book store</Text>
        <Text style={styles.text2}>  Good friends, good books and a sleepy conscience, this is the ideal life.</Text>
        <View style={styles.image}>
              <Image style={styles.logo} source={require("../assets/book2.jpg")}/>
            </View>
      
      <Button
        style={styles.button}
        title="Go to Books"
        onPress={() => navigation.navigate("Books")}
      />
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  image:{
    paddingBottom:80,
    paddingTop:40
  },
  text:{
    fontSize:30,
    color:'black',
    alignItems:'flex-end',
    fontWeight:'bold',
    paddingBottom:30
  },
  button:{
    paddingTop:70,
    paddingBottom:40
  },
  logo:{
    width:220,
    height:220,
  },
  text2:{
    fontSize:18,
    color:'black',
    alignItems:'center',
    fontWeight:'bold',
    paddingBottom:20
  },
});
