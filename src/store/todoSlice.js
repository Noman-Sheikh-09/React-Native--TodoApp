import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {db} from '../config/Firebase';
import {Alert} from 'react-native';
// fetch Data from Firebase

export const fetchData = createAsyncThunk('todo/fetchData', async () => {
  const data = [];
  const snapShot = await db.collection('Tasks').get();
  snapShot.forEach(childTodo => {
    data.push({...childTodo.data(), docId: childTodo.id});
  });
  return data;
});

// Add Data into Firebase

export const addData = createAsyncThunk(
  'todoSlice/addData',
  async (data, navigate) => {
    try {
      await db.collection('Tasks').add(data);
      const localData = {...data, uid: data.uid};
      return localData;
    } catch (error) {
      Alert.alert(error.message);
    }
  },
);
export const deleteData = createAsyncThunk(
  'todoSlice/deleteData',
  async docId => {
    // console.log(uid);
    await db.collection('Tasks').doc(docId).delete();

    return docId;
  },
);
export const toggleComplete = createAsyncThunk(
  'todoSlice/toggleComplete',
  async (docId, updateData) => {
    // console.log(updateData);
    await db.collection('tasks').doc(docId).update(updateData);
    return data;
  },
);
export const updateData = createAsyncThunk(
  'todoSlice/updateData',
  async data => {
    await db.collection('Tasks').doc(data.docId).update(data);
    return data;
  },
);

const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: {
    todo: [],
    error: false,
    pending: false,
    isUpdate:false,
    updateTodo:{},
  },
  reducers: {
    setIsUpdate:(state,action)=>{
      console.log("Update Reducer");
      state.isUpdate = true;
      state.updateTodo = action.payload;
    }
  },
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
      // console.log('add reducer', action.payload);
      state.todo = [...state.todo, action.payload];
    },
    [addData.rejected]: (state, action) => {
      state.error = true;
      state.pending = false;
    },
    [addData.pending]: (state, action) => {
      state.pending = true;
    },
    [deleteData.fulfilled]: (state, action) => {
      const dataAfterDelete = state.todo.filter(
        singleItem => singleItem.docId !== action.payload,
      );
      state.todo = dataAfterDelete;
    },
    [updateData.fulfilled]: (state, action) => {
      const updatedData = state.todo.map(singleItem => {
        if (action.payload.docId === singleItem.docId) {
          return {...singleItem,...action.payload};
        } else {
          return singleItem;
        }
      });
console.log("updated data",updatedData);
      state.todo = updatedData;
    },
    // [toggleComplete.fulfilled]: (state, action) => {
    //   state.todo.map(item => {
    //     if (item.docId === action.payload.docId) {
    //       return action.payload.updateData;
    //     } else {
    //       return item;
    //     }
    //   });
    // },
  },
});
export const { setIsUpdate } = todoSlice.actions;
export default todoSlice.reducer;