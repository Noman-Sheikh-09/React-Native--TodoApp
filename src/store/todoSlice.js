import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {db} from '../config/Firebase';

// fetch Data from Firebase

export const fetchData = createAsyncThunk("todo/fetchData", async () => {
 
  const data = [];
  const snapShot = await db.collection('Tasks').get();
  snapShot.forEach((childTodo) => {
    data.push({...childTodo.data(), uid: childTodo.id});
  });
  return data;
});

// Add Data into Firebase

export const addData = createAsyncThunk(
  'todoSlice/addData',
  async (data, navigate) => {

    await db.collection('Tasks').add(data);
    localData = {...todo, uid: data.id};
    // navigate.replace('Tasker');

    return localData;
  },
);

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
});
export default todoSlice.reducer;
