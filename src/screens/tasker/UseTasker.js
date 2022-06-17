import { View, Text } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native'

export default function UseTasker() {
    const navigate = useNavigation();
    const adddTaskHandler =()=>{
        navigate.navigate('Form')
    }
  return {
    adddTaskHandler
  }
}