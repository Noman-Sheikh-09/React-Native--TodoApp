import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react'
export default function UseEditScreen() {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');

  return [
    task,setTask,
    description,setDescription,
  ]
}