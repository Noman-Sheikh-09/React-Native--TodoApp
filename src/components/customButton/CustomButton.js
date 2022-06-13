import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
export default function CustomButton({text}) {
  return (
     <TouchableOpacity>
    <View style={{paddingLeft:20,paddingRight:20,borderRadius:30,marginTop:75}}>
     
        <Text style={{color:'white',backgroundColor:'#800080',padding:20,borderRadius:30,textAlign:'center'}}>
{text}
        </Text>
    </View>
    </TouchableOpacity>

  )
}