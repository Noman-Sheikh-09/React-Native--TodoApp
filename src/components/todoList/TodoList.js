import {View, TouchableOpacity, Text, Modal} from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import UseTodoList from './UseTodoList';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {style} from './TodoListStyle';
export default function TodoList({singleTodo}) {
  const [
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
    navigate
  ] = UseTodoList();
  const rightSwipe = () => {
    return (
      <View style={{flexDirection: 'row', idth: 100, height: 90}}>
        {/* Edit Button  */}
        <TouchableOpacity onPress={()=>navigate.navigate("Edit")}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              alignItems: 'center',
              backgroundColor: 'green',
              padding: 15,
              borderRadius: 12,
              marginRight: 3,
            }}>
            <Icon name="edit" size={20} />
          </Text>
        </TouchableOpacity>
        {/* Delete Button  */}
        <TouchableOpacity onPress={() => showDeleteModal(singleTodo.uid)}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              alignItems: 'center',
              backgroundColor: 'red',
              padding: 15,
              borderRadius: 12,
            }}>
            <Icon name="trash" size={20} />
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <Swipeable renderRightActions={rightSwipe}>
        <View
          style={{
            height: 'auto',
            backgroundColor: 'white',
            borderRadius: 5,
            paddingTop: 7,
            paddingBottom: 7,
            paddingLeft: 7,
            marginBottom: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              width: '90%',
              // textDecorationLine: data.TaskComplete ? 'line-through' : null
            }}>
            <CheckBox
              disabled={false}
              value={singleTodo.TaskComplete == true ? true : toggleCheckBox}
              onValueChange={newValue =>
                taskCompleteHandler(newValue, singleTodo.uid, singleTodo)
              }
            />
            <Text style={{marginLeft: 10, fontSize: 16}}>
              {singleTodo?.task}
            </Text>
          </View>
        </View>
      </Swipeable>
      {/* Alert Modal Code Start  */}

      <View style={style.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={style.centeredView}>
            <View style={style.modalView}>
              <Text style={style.modalText}>
                Are you sure you want to delete?
              </Text>
              <View style={style.buttonsContainer}>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={style.textStyle}>No</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => ctaDeleteHandler(singleTodo.uid)}>
                  <Text style={style.textStyle}>Yes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      {/* Alert Modal Code End  */}
    </>
  );
}
