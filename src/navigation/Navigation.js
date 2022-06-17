import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login/Login';
import Signup from '../screens/signup/Signup';
import Tasker from '../screens/tasker/Tasker';
import Form from '../components/form/Form';
export default function Navigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      
    </NavigationContainer>
  );
}
