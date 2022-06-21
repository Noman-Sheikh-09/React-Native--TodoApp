import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
export default function UseTasker() {

  const navigate = useNavigation();
  const adddTaskHandler = () => {
    navigate.navigate('Form');
  };
  return {
    adddTaskHandler,
  };
}
