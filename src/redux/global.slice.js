import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    isLoading: false,
    isPerLoading: false,
    skeleton: false,
    paramsUrl: {},
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setPerLoading: (state, action) => {
      state.isPerLoading = action.payload;
    },
    setSkeleton: (state, action) => {
      state.skeleton = action.payload;
    },
    setParamsUrl: (state, action) => {
      state.paramsUrl = { ...state.paramsUrl, ...action.payload };
    },
  },
});

export const { setLoading, setSkeleton, setParamsUrl, setPerLoading } =
  globalSlice.actions;

export default globalSlice.reducer;
