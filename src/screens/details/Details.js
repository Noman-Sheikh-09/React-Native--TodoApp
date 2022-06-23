import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {style} from './DetailsStyle';
// import UseDetails from './UseDetails';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
export default function Details() {
  const[docId,setDocId]=useState('');
  // const [singleTask, docId, setDocId, modalVisible, setModalVisible] =
    // UseDetails();
const tasksData = useSelector(state=> state.todo.todo);

const singleTask=tasksData.filter((item)=>{
  if(item.docId==docId){
      return item;
  }
  console.log("item in details", item);
})



  return (
    <View style={style.detailsContainer}>
      <ScrollView>
        <View style={style.taskDetailsContainer}>
          {singleTask.map((data) => {
            return (
              <View key={data.docId} style={{ backgroundColor:'black', textAlign:'center'}}>
                <Text>{data?.task}</Text>
                <View style={style.descriptionContainer}>
                  <Text>{data?.description}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
