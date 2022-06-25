import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import { style } from './SignupStyle';
import UseSignup from './UseSignup';
export default function Signup() {
  const [  fname,
    setFname,
    lname,
    setLname,
    email,
    setEmail,
    password,
    setPassword,
    signupHandler]= UseSignup();
    // console.log(email,password, fname, lname);
  return (
    <View style={style.loginContainer}>
      <View style={{flex: 1}}></View>
      <View style={style.topTitle}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30}}>
          Welcome!
        </Text>
      </View>
      <View style={style.loginFooter}>
        <KeyboardAvoidingView style={style.inputContainer}>
          <TextInput placeholder="First Name"
          value={fname}
          onChangeText={setFname}
          style={style.fnameFeild} />
          <TextInput placeholder="Last Name" 
           value={lname}
           onChangeText={setLname}
           style={style.lnameFeild} />
          <TextInput placeholder="Email" 
           value={email}
           onChangeText={setEmail}
           style={style.emailFeild} />
          <TextInput placeholder="Password"
          
          value={password}
          onChangeText={setPassword}
          style={style.passwordFeild} />
          <TouchableOpacity onPress={signupHandler} >
            <Text style={style.signupBtn}>
              Signup
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
       
      </View>
    </View>
  );
}
