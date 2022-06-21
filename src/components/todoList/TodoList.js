import {View, Text} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import todoSlice, {getData} from '../../store/todoSlice';

export default function TodoList() {
  // const todo = useSelector(state => state.todo.todo);
  // console.log(todo);

  const dispatch = -useDispatch();

  // useEffect(() => {
  //   dispatch(getData());
  // });

  return (
    <View>
      <Text>
        {/* {todo.map(singleTodo => {
          return (
            <View key={singleTodo.uid}>
              <Text>{singleTodo.task}</Text>
              <Text>{singleTodo.description}</Text>
            </View>
          );
        })} */}
      </Text>
      <Text>Description</Text>
    </View>
  );
}
