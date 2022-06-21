import { configureStore } from "@reduxjs/toolkit"
import todoSlice from "../store/todoSlice";

const store = configureStore({
    reducer:{
todo:todoSlice,
    }
});
export default store;