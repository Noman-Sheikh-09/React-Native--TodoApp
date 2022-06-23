import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {db} from '../config/Firebase';
import {Alert} from 'react-native';
// fetch Data from Firebase

export const fetchData = createAsyncThunk('todo/fetchData', async () => {
  const data = [];
  const snapShot = await db.collection('Tasks').get();
  snapShot.forEach(childTodo => {
    data.push({...childTodo.data(), uid: childTodo.id});
  });
  return data;
});

// Add Data into Firebase

export const addData = createAsyncThunk(
  'todoSlice/addData',
  async (data, navigate) => {
    try {
      await db.collection('Tasks').add(data);
      localData = {...todo, uid: data.id};

      return localData;
    } catch (error) {
      Alert.alert(error.message);
    }
  },
);
export const deleteData = createAsyncThunk("todoSlice/deleteData", async(uid,navigate)=>{
  console.log(uid);
await db.collection('Tasks').doc(uid).delete();
navigate.goBack();
  return uid;
})
// export const toggleComplete = createAsyncThunk(
//   'todoSlice/toggleComplete',
//   async (data) => {
//     await db.collection('Tasks').doc(data.uid).set(data);
    
//     return data;

// );

const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: {
    todo: [],
    error: false,
    pending: false,
  },
  reducers: {},
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.todo = action.payload;
      state.pending = false;
    },
    [fetchData.rejected]: (state, action) => {
      state.error = true;
      state.pending = true;
    },

    [fetchData.pending]: (state, action) => {
      state.pending = true;
    },
    [addData.fulfilled]: (state, action) => {
      state.todo = [...state.todo, action.payload];
    },
    [addData.rejected]: (state, action) => {
      state.error = true;
      state.pending = false;
    },
    [addData.pending]: (state, action) => {
      state.pending = true;
    },
  
  },
  [deleteData.fulfilled]: (state, action) => {
    const dataAfterDelete = state.todo.filter(
      (singleItem) => singleItem.uid !== action.payload.uid
    );
    state.todo = dataAfterDelete;
    },
});
export default todoSlice.reducer;
