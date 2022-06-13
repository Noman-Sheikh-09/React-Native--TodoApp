import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from './LoginStyle';
import CustomButton from '../../components/customButton/CustomButton';

export default function Login() {
  return (
    <View style={style.loginContainer}>
      <View style={{flex: 1}}></View>
      <View style={style.loginFooter}>
        <View style={style.inputContainer}>
          <TextInput placeholder="Email" style={style.emailFeild} />
          <TextInput placeholder="Password" style={style.passwordFeild} />
        </View>
        <View style={style.loginButton}>
          <CustomButton text="Login" />
        </View>
      </View>
    </View>
  );
}
