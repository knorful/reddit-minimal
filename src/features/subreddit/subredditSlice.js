import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../util/API";

export const loadPostsBySubreddit = createAsyncThunk(
  "subreddit/loadPostsBySubreddit",
  (subreddit) => API.loadPosts(subreddit)
);

export const loadAboutDetailsBySubreddit = createAsyncThunk(
  "subreddit/loadAboutDetailsBySubreddit",
  (subreddit) => API.aboutSubreddit(subreddit)
);

export const subredditSlice = createSlice({
  name: "subreddit",
  initialState: {
    subredditPosts: [],
    loadingSubredditPosts: false,
    hasErrors: false,

    subredditAbout: [],
    loadingSubredditAbout: false,
    hasAboutErrors: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPostsBySubreddit.pending, (state, action) => {
        state.loadingSubredditPosts = true;
        state.hasErrors = false;
      })
      .addCase(loadPostsBySubreddit.fulfilled, (state, action) => {
        state.loadingSubredditPosts = false;
        state.hasErrors = false;
        state.subredditPosts = action.payload;
      })
      .addCase(loadPostsBySubreddit.rejected, (state, action) => {
        state.loadingSubredditPosts = false;
        state.hasErrors = true;
      })

      // About Subreddit
      .addCase(loadAboutDetailsBySubreddit.pending, (state, action) => {
        state.loadingSubredditPosts = true;
        state.hasErrors = false;
      })
      .addCase(loadAboutDetailsBySubreddit.fulfilled, (state, action) => {
        state.subredditAbout = action.payload;
        state.loadingSubredditPosts = false;
        state.hasErrors = false;
      })
      .addCase(loadAboutDetailsBySubreddit.rejected, (state, action) => {
        state.loadingSubredditPosts = false;
        state.hasAboutErrors = true;
      });
  },
});

export default subredditSlice.reducer;
export const selectSubredditPosts = (state) => state.subreddit.subredditPosts;
export const isLoadingSubredditPosts = (state) =>
  state.subreddit.loadingSubredditPosts;

export const selectSubredditsAbouts = (state) => state.subreddit.subredditAbout;
export const isLoadingSubredditAbouts = (state) =>
  state.subreddit.loadingSubredditAbout;
