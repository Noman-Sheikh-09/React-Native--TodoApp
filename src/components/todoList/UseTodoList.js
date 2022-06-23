import {View, Text} from 'react-native';
import React from 'react';
import {useState} from 'react';
import { useDispatch,  } from 'react-redux';
import { deleteData } from '../../store/todoSlice';
import { useNavigation } from '@react-navigation/native';
export default function UseTodoList() {
  const[docId,setDocId]=useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [deletedocId, setDeleteDocId] = useState('');
const dispatch = useDispatch();
const navigate = useNavigation();
  const taskCompleteHandler = (newValue, docId, data) => {};
  const showDeleteModal = () => {
    setDeleteDocId(docId);
    setModalVisible(true);
  };
  const ctaDeleteHandler =(uid)=>{
    dispatch(deleteData(uid, navigate))
  }

  return [
    docId,setDocId,
    toggleCheckBox,
    setToggleCheckBox,
    taskCompleteHandler,
    modalVisible,
    setModalVisible,
    deletedocId,
    setDeleteDocId,
    showDeleteModal,
    ctaDeleteHandler,navigate
  ];
}
