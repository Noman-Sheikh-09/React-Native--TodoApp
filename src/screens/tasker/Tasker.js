import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {style} from './TaskerStyle';
import UseTasker from './UseTasker';
import TodoList from '../../components/todoList/TodoList';

export default function Tasker() {
  const {adddTaskHandler} = UseTasker();
  return (
    <View style={style.taskerContainer}>
      <View style={style.header}>
        <Text style={style.todo}>To Do</Text>
        {/* Drawer  */}
      </View>
      <View >
        <TodoList/>
      </View>
      <View style={style.btnView}>
        <TouchableOpacity onPress={adddTaskHandler}>
          
          <Text style={style.addTaskBtn}>
          <Icon name="plus" size={20} style={style.btnAddNew} />
            Add New Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
