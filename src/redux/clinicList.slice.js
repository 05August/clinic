import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import clientServer from "server/clientServer";
import { setLoading } from "./global.slice";

export const getClinicList = createAsyncThunk("getClinicList", async () => {
  try {
    useDispatch(setLoading(true));
    const getResponse = await clientServer.get("clinicList");
    return getResponse.data;
  } catch (error) {
    return error;
  } finally {
    useDispatch(setLoading(false));
  }
});

const clinicListSlice = createSlice({
  name: "clinicList",
  initialState: {
    errorMessage: "",
    data: [],
  },
  reducers: {
    // get: () => this.initialState.category,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getClinicList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getClinicList.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.errorMessage = "";
      })
      .addCase(getClinicList.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.error;
      });
  },
});

export default clinicListSlice.reducer;
