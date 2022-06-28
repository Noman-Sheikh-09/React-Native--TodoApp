import { View, Text,ActivityIndicator, Image } from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../store/authSlice';
import SplashLogo from '../../assets/logo2.png'
export default function SplashScreen() {
    const navigate = useNavigation();
    const dispatch = useDispatch();
    useEffect(() => {
     dispatch(fetchUser(navigate))
    }, [])
    
  return (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Image source={SplashLogo} style={{width:70,height:70}} />
    </View>
  )
}