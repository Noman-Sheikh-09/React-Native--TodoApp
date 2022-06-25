import {configureStore} from '@reduxjs/toolkit';
import authSlice from '../store/authSlice';
import todoSlice from '../store/todoSlice';

const store = configureStore({
  reducer: {
    todo: todoSlice,
    auth: authSlice,
  },
});
export default store;
