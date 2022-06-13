import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import { style } from './SignupStyle';
import CustomButton from '../../components/customButton/CustomButton';

export default function Signup() {
  return (
    <View style={style.loginContainer}>
      <View style={{flex: 1}}></View>
      <View style={style.loginFooter}>
        <View style={style.inputContainer}>
          <TextInput placeholder="First Name" style={style.fnameFeild} />
          <TextInput placeholder="Last Name" style={style.lnameFeild} />
          <TextInput placeholder="Email" style={style.emailFeild} />
          <TextInput placeholder="Password" style={style.passwordFeild} />
        </View>
        <View style={style.loginButton}>
          <CustomButton text="Signup" />
        </View>
      </View>
    </View>
  );
}
