import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import clientServer from "server/clientServer";

export const getClinicList = createAsyncThunk("getClinicList", async () => {
  try {
    const getResponse = await clientServer.get("clinicList");
    return getResponse.data;
  } catch (error) {
    return error;
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
