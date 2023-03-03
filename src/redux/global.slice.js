import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    isLoading: false,
    paramsUrl: {},
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setParamsUrl: (state, action) => {
      state.paramsUrl = { ...state.paramsUrl, ...action.payload };
    },
  },
});

export const { setLoading, setParamsUrl } = globalSlice.actions;

export default globalSlice.reducer;
