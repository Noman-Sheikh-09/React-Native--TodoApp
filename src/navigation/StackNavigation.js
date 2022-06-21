import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../screens/login/Login';
import Signup from '../screens/signup/Signup';
import Tasker from '../screens/tasker/Tasker';
import EditScreen from '../screens/editScreen/EditScreen';
import Form from '../components/form/Form';
import Option from '../screens/option/Option';
const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} /> */}

        <Stack.Screen name="Tasker" component={Tasker} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Edit" component={EditScreen} />
        <Stack.Screen name="Option" component={Option} />
      </Stack.Navigator>
    </>
  );
}
