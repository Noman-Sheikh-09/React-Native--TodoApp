import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { style } from './TaskerStyle'
import UseTasker from './UseTasker'

export default function Tasker() {
  
  const {adddTaskHandler} = UseTasker();
  return (
    <View style={style.taskerContainer}>
        <View style={style.header}>
            <Text style={style.todo}>To Do</Text>
{/* Drawer  */}

        </View>
        <View style={style.btnView}>
        <TouchableOpacity onPress={adddTaskHandler}>
      <Text style={style.addTaskBtn}>
      Add New Task
      </Text>
     </TouchableOpacity>
        </View>
   
    </View>
  )
}