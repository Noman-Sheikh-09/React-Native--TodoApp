import { View, Text,ActivityIndicator } from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../store/authSlice';
export default function SplashScreen() {
    const navigate = useNavigation();
    const dispatch = useDispatch();
    useEffect(() => {
     dispatch(fetchUser(navigate))
    }, [])
    
  return (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
     <ActivityIndicator size="large" color="#800080" />
      <Text>Loading....</Text>
    </View>
  )
}