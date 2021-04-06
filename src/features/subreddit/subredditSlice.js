import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../util/API";

export const loadPostsBySubreddit = createAsyncThunk(
  "subreddit/loadPostsBySubreddit",
  (subreddit) => API.loadPosts(subreddit)
);

export const subredditSlice = createSlice({
  name: "subreddit",
  initialState: {
    subredditPosts: [],
    loadingSubredditPosts: false,
    hasErrors: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPostsBySubreddit.pending, (state, action) => {
        state.loadingSubredditPosts = false;
        state.hasErrors = false;
      })
      .addCase(loadPostsBySubreddit.fulfilled, (state, action) => {
        state.loadingSubredditPosts = false;
        state.hasErrors = false;
      })
      .addCase(loadPostsBySubreddit.rejected, (state, action) => {
        state.loadingSubredditPosts = false;
        state.hasErrors = false;
      });
  },
});

export default subredditSlice.reducer;
export const selectSubredditPosts = (state) => state.subreddit.subredditPosts;
export const isLoadingSubredditPosts = (state) =>
  state.subreddit.loadingSubredditPosts;
