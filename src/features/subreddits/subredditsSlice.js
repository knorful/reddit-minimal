import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadSubreddits = createAsyncThunk(
  "subreddits/loadSubreddits",
  async () => {
    const data = await axios
      .get(`http://www.reddit.com/subreddits.json`)
      .then((res) => res.data.data.children);
    return data;
  }
);

export const subredditsSlice = createSlice({
  name: "subreddits",
  initialState: {
    subreddits: [],
    loadingSubreddits: true,
    hasErrors: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadSubreddits.pending, (state, action) => {
        state.loadingSubreddits = true;
        state.hasErrors = false;
      })
      .addCase(loadSubreddits.fulfilled, (state, action) => {
        state.subreddits = action.payload;
        state.loadingSubreddits = false;
        state.hasErrors = false;
      })
      .addCase(loadSubreddits.rejected, (state, action) => {
        state.loadingSubreddits = false;
        state.hasErrors = true;
      });
  },
});

export default subredditsSlice.reducer;
export const selectSubreddits = (state) => state.subreddits.subreddits;
export const isLoadingSubreddits = (state) =>
  state.subreddits.loadingSubreddits;
