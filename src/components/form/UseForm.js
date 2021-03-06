import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addData} from '../../store/todoSlice';
export default function UseForm() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [task, setTask] = useState('');
  const [addTaskLoading, setAddTaskLoading] = useState(false);
  const [description, setDescription] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const user = useSelector(state => state.auth.user);
  const [completed, setCompleted] = useState();
  // const year= date.getFullYear();
  // const month=date.getMonth()+1;
  // const currentDate= date.getDate();
  // const hours=timeDgetHDurs();
  // const minutes=time.getMinutes();

  // const dateData = new Date(year,month,currentDate,hours,minutes).toISOString();
  // start: dateData,
  // date: getDate(),
  // time: getTime()
  const ctaAddHandler = () => {
    let todoData = {
      uid:user.userId,
      task,
      description,
      completed : false
    };
    dispatch(addData(todoData, navigation));
    setTask('');
    setDescription('');
    navigation.replace('Tasker');
    
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = time => {
    hideTimePicker();
    setTime(time);
  };

  // Time
  const getDate = () => {
    let tempDate = date.toString().split(' ');
    if (tempDate[2] == new Date().getDate()) {
      return 'Today';
    } else if (tempDate[2] == new Date().getDate() - 1) {
      return 'Yesterday';
    } else if (tempDate[2] == new Date().getDate() + 1) {
      return 'Tomorrow';
    } else {
      return date !== ''
        ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
        : '';
    }
  };

  const getTime = () => {
    let tempTime = time.toString().split(' ');
    return time !== '' ? `${tempTime[4]}` : '';
  };
  return [
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
  ];
}
