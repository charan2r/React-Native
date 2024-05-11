import { View, Text, Switch, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Switches = () => {
    const [isEnabled,setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Switch
         trackColor={{false:'yellow', true:'cyan'}}
         thumbColor={isEnabled? 'yellow':'cyan'}
         onValueChange={toggleSwitch}
         value={isEnabled}
      />
      
    </View>
  )
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
       
    }

})

export default Switches