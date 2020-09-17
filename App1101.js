import React from 'react'
import {View,Text} from 'react-native'

//Child Componrnt
const Home=()=>{
  return(
    <View>
      <Text>Home Screen </Text>
    </View>
  )
}

//parent Component
const App=()=>{
  return(
    <View style={{flex:1,alignitems:'center',justifycontent:'center'}}>
      <Home></Home>
      <Home></Home>
    </View>
  )
}
export default App