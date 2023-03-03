import { configureStore } from "@reduxjs/toolkit";
import clinicListReducer from "./clinicList.slice.js";
import globalReducer from "./global.slice.js";

const store = configureStore({
  reducer: {
    clinicList: clinicListReducer,
    globalSlice: globalReducer,
  },
});
export default store;
