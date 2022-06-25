import {View, Text} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { doSignup } from '../../store/authSlice';

export default function UseSignup() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
   const signupHandler=()=>{
    let newUserData = {
        fname:fname,
        lname:lname,
        email:email,
        password:password
    }
dispatch(doSignup(newUserData))
// console.log("new user data in hooks",newUserData);
   }


  return [
    fname,
    setFname,
    lname,
    setLname,
    email,
    setEmail,
    password,
    setPassword,
    signupHandler
  ];
}
