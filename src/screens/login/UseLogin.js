import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {doLogin} from '../../store/authSlice';

export default function UseLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const goSignup = () => {
    navigate.navigate('Signup');
  };

  const ctaLoginHandler = () => {
    console.log('Login press');

    let userData = {
      email: email,
      password: password,
    };
dispatch(doLogin(userData,setLoginLoading))
   console.log("userdata in hook dispatch",userData)
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    loginLoading,
    setLoginLoading,
    goSignup,
    ctaLoginHandler,
  };
}
