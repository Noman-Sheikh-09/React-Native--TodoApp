import {View, Text} from 'react-native';
import React from 'react';

export default function TodoList({singleTodo}) {
  return (
    <View
      style={{
        height: 'auto',
        backgroundColor: 'white',
        borderRadius: 5,
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 7,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          width: '90%',
          // textDecorationLine: data.TaskComplete ? 'line-through' : null
        }}>
        <Text style={{marginLeft: 10, fontSize: 16}}>{singleTodo?.task}</Text>
      </View>
      {/* <Text style={{ color: '#FF6347', marginLeft: 40,  }}>
             {singleTodo?.date}, {singleTodo?.time}
            </Text> */}
    </View>
  );
}
