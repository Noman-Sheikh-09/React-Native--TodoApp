import {View, Text, TouchableOpacity, ScrollView, Modal} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {style} from './TaskerStyle';
import UseTasker from './UseTasker';
import TodoList from '../../components/todoList/TodoList';

export default function Tasker() {
  const {adddTaskHandler, tasksData, navigate} = UseTasker();
  return (
    <View style={style.taskerContainer}>
      <View style={style.headerContainer}>
        <View style={style.headerRow}>
          <View style={{justifyContent: 'flex-end', width: '50%'}}>
            <Text style={style.todo}>To Do</Text>
          </View>
          <View
            style={{
              justifyContent: 'flex-end',
              display: 'flex',
              flexDirection: 'row',
              width: '50%',
            }}>
            <TouchableOpacity>
              <Icon name="bars" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={style.calenderConatiner}></View>
      <View style={style.taskContainer}>
        <View style={style.totalTaskContainer}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Tasks</Text>
        </View>
        <ScrollView
          style={{
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 20,
          }}>
          {tasksData?.map(singleTodo => {
            return (
              <View  key={singleTodo.uid} > 
              <TouchableOpacity>
                <TodoList singleTodo={singleTodo}  />
              </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>

      <View style={style.btnView}>
        <TouchableOpacity onPress={adddTaskHandler}>
          <Text style={style.addTaskBtn}>+ Add New Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
