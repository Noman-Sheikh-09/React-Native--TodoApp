import {useNavigation} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../store/todoSlice';
export default function UseTasker() {
  const tasksData = useSelector(state=>state.todo.todo)
 
const dispatch = useDispatch();
useEffect(()=>{
dispatch(fetchData())
},[])
  const navigate = useNavigation();
  const adddTaskHandler = () => {
    navigate.navigate('Form');
  };
  
  return {
    adddTaskHandler,
    tasksData,
    navigate
  };
}
