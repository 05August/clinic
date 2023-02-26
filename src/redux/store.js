import { configureStore } from "@reduxjs/toolkit";
import clinicListReducer from "./clinicList.slice.js";
import loadingReducer from "./global.slice.js";

const store = configureStore({
  reducer: {
    clinicList: clinicListReducer,
    loadingSlice: loadingReducer,
  },
});
export default store;
