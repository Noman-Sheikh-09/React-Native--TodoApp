import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import Login from '../screens/login/Login';
import Signup from '../screens/signup/Signup';
import Tasker from '../screens/tasker/Tasker';
import EditScreen from '../screens/editScreen/EditScreen';
import Form from '../components/form/Form';
import Option from '../screens/option/Option';
const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  const auth = useSelector(state => state.AuthReducer.isUserLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
    
        {!auth ? (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        ) : (
          <>
            <Stack.Screen name="Tasker" component={Tasker} />
            <Stack.Screen name="Form" component={Form} />
            <Stack.Screen name="Form" component={EditScreen} />
            <Stack.Screen name="Option" component={Option} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
