import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../util/API";

export const loadUserData = createAsyncThunk("user/loadUserData", (user) =>
  API.getUserData(user)
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: [],
    loadingUserData: false,
    hasErrors: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUserData.pending, (state, action) => {
        state.loadingUserData = false;
        state.hasErrors = false;
      })
      .addCase(loadUserData.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.loadingUserData = false;
        state.hasErrors = false;
      })
      .addCase(loadUserData.rejected, (state, action) => {
        state.loadingUserData = false;
        state.hasErrors = false;
      });
  },
});

export default userSlice.reducer;
export const selectUserData = (state) => state.user.userData;
export const isLoadingUserData = (state) => state.user.loadUserData;
