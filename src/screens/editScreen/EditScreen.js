import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {style} from './EditScreenStyle';
import UseEditScreen from './UseEditScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function EditScreen({route}) {
  const [task, setTask, description, setDescription, setId,onClickUpdateHandler] = UseEditScreen();
  const {id} = route.params;
  useEffect(() => {
    setId(id);
  }, [id]);
  return (
    <View style={{flex: 1}}>
      <View style={{marginTop: 20}}></View>
      <View style={{paddingLeft: 10, paddingRight: 10}}>
        <Text style={style.textTitle}>Your Task</Text>
        <TextInput
          placeholder="Task"
          style={style.input}
          defaultValue={task}
          onChangeText={task => setTask(task)}
        />
      </View>
      <View style={{paddingLeft: 10, paddingRight: 10, marginTop: 50}}>
        <Text style={style.textTitle}>Task Description</Text>
        <TextInput
          placeholder="Description"
          style={style.input}
          defaultValue={description}
          onChangeText={description => setDescription(description)}
        />
      </View>
      <View style={style.checkIconView}>
        <TouchableOpacity onPress={onClickUpdateHandler}>
          <Text>
            <Icon name="check" size={50} style={style.checkIcon} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
