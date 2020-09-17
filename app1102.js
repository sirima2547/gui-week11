import React,{Component} from 'react'
import {View,Text,tyleSheet} from 'react-native'

class App extends Component{
  state={
   counter:1,
   title:'Counter',
   TeamA:'Mam chester City'
  }


updateState=()=>{
this.setState({

 })
}
incrementCount=()=>{
  this.setState({
    counter:this.state.counter+1
  })
}
decrementCount=()=>{
  this.setState({
    counter:this.setState.counter-1
  })
}
render(){
  return(
    <View styie={StyleSheet.container}>
      <Text style={styles.text}>English Promier League</Text>
      <Text style={styles.text}>Score: {this.state.counter}</Text>
      <Text style={styles.text}> Team:{this.state.teamA}</Text>
      <Text style={styles.text}onpress={()=>this.updateState()}>Updat</Text>
      <Button title="Incrment"color="red"onPress={()=>this.incrementCount()}/>
      <Button title="Decrment"color="pink"onPress={()=>this.decrementCount()}/>
    </View>
  )
 }
}

const styles=StyleSheet.create({
  container:{
    flex:1,justifyContent:'center',
  },
  text:{
    textAlign:'center',marginVertical:8
  },
  title2:{
    textAlign:'center',
    color:'white',
    backgroundColor:'endregion'
  }
})
export default App