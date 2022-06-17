import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from './LoginStyle';
import CustomButton from '../../components/customButton/CustomButton';
import UseLogin from './UseLogin';

export default function Login() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loginLoading,
    setLoginLoading,
    goSignup,
    loginHandler,
  } = UseLogin();
  console.log(email, password);

  return (
    <View style={style.loginContainer}>
      <View style={style.topTitle}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30}}>
          Welcome!
        </Text>
      </View>
      <View style={{flex: 1}}></View>

      <View style={style.loginFooter}>
        <View style={style.inputContainer}>
          <TextInput
            placeholder="Email"
            style={style.emailFeild}
            onChange={e => setEmail(e.target.value)}
          />
          <TextInput
            placeholder="Password"
            style={style.passwordFeild}
            onChange={e => setPassword(e.target.value)}
          />
        </View>
        <View style={style.loginButton}>
          <CustomButton text="Login" onPress={loginHandler} />
        </View>
        <View>
          <Text style={style.goSignup}>You don't have an account?</Text>
          <TouchableOpacity onPress={goSignup}>
            <Text style={style.signup}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
