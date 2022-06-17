import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {doLogin} from '../../store/action/AuthAction';
export default function UseLogin() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  const navigate = useNavigation();
  const goSignup = () => {
    navigate.navigate('Signup');
  };

  const loginHandler = () => {
    if (email != '' && password != '') {
      const userData = {
        email,
        password,
      };
      // console.log("userData from Custom Hook",userData);

      dispatch(doLogin(userData, navigate, setLoginLoading));
    } else {
      Alert.alert('Enter Email or Password');
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    loginLoading,
    setLoginLoading,
    goSignup,
    loginHandler,
  };
}