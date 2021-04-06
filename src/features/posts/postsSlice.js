import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../util/API";

export const loadPosts = createAsyncThunk(
  "posts/loadPopularPosts",
  async () => {
    return API.loadPosts();
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoadingPosts: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPosts.pending, (state, action) => {
        state.isLoadingPosts = true;
        state.hasError = false;
      })
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoadingPosts = false;
        state.hasError = false;
      })
      .addCase(loadPosts.rejected, (state, action) => {
        state.isLoadingPosts = false;
        state.hasError = true;
      });
  },
});

export default postsSlice.reducer;
export const selectAllPosts = (state) => state.posts.posts;
export const isLoading = (state) => state.posts.isLoadingPosts;
