import { View, Text, TextInput } from 'react-native'
import React from 'react'
import UseForm from './UseForm'
import { style } from './FormStyle'
export default function Form() {
 
  return (
    <View style={{flex:1}}>
      <View style={{marginTop:20}} >
        <Text style={style.formTitle}>
          Add Task
        </Text>
      </View>
<View style={{paddingLeft:10,paddingRight:10}} >

  <Text>
    Your Task
  </Text>
<TextInput placeholder='Task' style={{borderWidth:2}}/>

</View>
<View style={{paddingLeft:10,paddingRight:10}} >
  <Text>
    Your Task
  </Text>
<TextInput placeholder='Task' style={{borderWidth:2}}/>

</View>


    </View>
  )
}