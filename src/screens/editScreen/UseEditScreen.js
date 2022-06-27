import React, {useEffect} from 'react';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {updateData} from '../../store/todoSlice';
export default function UseEditScreen() {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [id, setId] = useState('');
  console.log(id);
  const tasksData = useSelector(state => state.todo.todo);

  const navigate = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    let filterArray = tasksData.filter(item => {
      if (item.docId == id) {
        console.log('Filter Array', filterArray);
        return item;
      }
    });
    setTask(filterArray[0]?.task);
    setDescription(filterArray[0]?.description);
  }, [id]);

  const onClickUpdateHandler = () => {
    const data = {
      docId: id,
      task: task,
      description: description,
    };

    dispatch(updateData(data));
    navigate.navigate('Tasker');
  };

  return [
    task,
    setTask,
    description,
    setDescription,
    setId,
    onClickUpdateHandler,
  ];
}
