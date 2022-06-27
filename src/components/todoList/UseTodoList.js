import {View, Text} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {deleteData, setIsUpdate, toggleComplete} from '../../store/todoSlice';
import {useNavigation} from '@react-navigation/native';
export default function UseTodoList() {
  const [docId, setDocId] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [deletedocId, setDeleteDocId] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const taskCompleteHandler = (newValue, docId, singleTodo) => {
    const updateData={
      ...data,
      TaskComplete:newValue,
  }
  dispatch(toggleComplete(docId,updateData,{setToggleCheckBox}))
  };
  const showDeleteModal = () => {
    setDeleteDocId(docId);
    setModalVisible(true);
  };
  const ctaDeleteHandler = (docId) => {
    dispatch(deleteData(docId));
    setModalVisible(false);
  };

  const ctaUpdateHandler=(docId)=>{

    navigate.navigate("Edit",{id:docId})
 
  
  }


  return [{
    docId,
    setDocId,
    toggleCheckBox,
    setToggleCheckBox,
    taskCompleteHandler,
    modalVisible,
    setModalVisible,
    deletedocId,
    setDeleteDocId,
    showDeleteModal,
    ctaDeleteHandler,
    ctaUpdateHandler,
  }
  ];
}
