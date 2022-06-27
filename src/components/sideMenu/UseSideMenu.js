import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { doLogout } from '../../store/authSlice';
export default function UseSideMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigation();

const logoutHandler=()=>{
  dispatch(doLogout())
}

  return [
    logoutHandler
  ]
}