import { View, Text } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

export default function UseDetails() {
    const tasksData = useSelector(state=>state.todo.todo)
const [modalVisible, setModalVisible] = useState(false);
const [docId, setDocId] = useState('')

// const dispatch = useDispatch();

let singleTask=tasksData.filter((item)=>{
    if(item.docId==docId){
        return item;
    }
})

  return [
singleTask,
docId,
setDocId,
modalVisible,
setModalVisible,

  ]
    
}