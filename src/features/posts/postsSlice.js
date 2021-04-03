import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadAllPosts = createAsyncThunk("posts/loadAllPosts", async () => {
  const data = await axios
    .get("https://www.reddit.com/r/popular.json")
    .then((res) => res.data.data.children);
  return data;
});

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoadingPosts: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAllPosts.pending, (state, action) => {
        state.isLoadingPosts = true;
        state.hasError = false;
      })
      .addCase(loadAllPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoadingPosts = false;
        state.hasError = false;
      })
      .addCase(loadAllPosts.rejected, (state, action) => {
        state.isLoadingPosts = false;
        state.hasError = true;
      });
  },
});

export default postsSlice.reducer;
export const selectAllPosts = (state) => state.posts.posts;
export const isLoading = (state) => state.posts.isLoadingPosts;
