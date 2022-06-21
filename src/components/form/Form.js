import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import UseForm from './UseForm';
import {style} from './FormStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import TimeIcon from 'react-native-vector-icons/Entypo';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
export default function Form() {
  const [
    task,
    setTask,
    description,
    setDescription,
    ctaAddHandler,
    addTaskLoading,
    setAddTaskLoading,
    isDatePickerVisible,
    setDatePickerVisibility,
    isTimePickerVisible,
    setTimePickerVisibility,
    date,
    setDate,
    time,
    setTime,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    showTimePicker,
    hideTimePicker,
    handleTimeConfirm,
    getTime,
    getDate,
  ] = UseForm();

  return (
    <View style={{flex: 1}}>
      <View style={{marginTop: 20}}>
        <Text style={style.formTitle}>Add Task</Text>
      </View>
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
      {/* Calender  */}
      <View>
        <TextInput
          placeholder="Set Your Date"
          style={style.input}
          value={getDate()}
          onPressIn={showDatePicker}
        />
        <View
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            marginTop: 0,
            flexDirection: 'row',
          }}>
          <Icon
            name="calendar"
            size={30}
            onPress={showDatePicker}
            style={{marginLeft: 300, alignSelf: 'center', color: '#800080'}}
          />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 10,
          paddingRight: 10,
          marginTop: 20,
        }}>
        <TextInput
          placeholder="Set Your Time"
          style={style.input}
          value={getTime()}
          onPressIn={showTimePicker}
        />
        <View>
          <TimeIcon
            style={{marginLeft: 15, marginTop: 15}}
            name="back-in-time"
            color="#800080"
            size={25}
            onPress={showTimePicker}
          />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleTimeConfirm}
            onCancel={hideTimePicker}
          />
        </View>
      </View>

      <View style={style.checkIconView}>
        <TouchableOpacity onPress={ctaAddHandler}>
          <Text>
            <Icon name="check" size={50} style={style.checkIcon} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
