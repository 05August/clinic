import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    isLoading: false,
    isPerLoading: false,
    paramsUrl: {},
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsPerLoading: (state, action) => {
      state.isPerLoading = action.payload;
    },
    setParamsUrl: (state, action) => {
      state.paramsUrl = { ...state.paramsUrl, ...action.payload };
    },
  },
});

export const { setLoading, setIsPerLoading, setParamsUrl } = globalSlice.actions;

export default globalSlice.reducer;
