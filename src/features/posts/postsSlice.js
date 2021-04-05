import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../util/API";

export const loadPopularPosts = createAsyncThunk(
  "posts/loadAllPosts",
  async () => {
    return API.loadPopularPosts();
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoadingPosts: true,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPopularPosts.pending, (state, action) => {
        state.isLoadingPosts = true;
        state.hasError = false;
      })
      .addCase(loadPopularPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoadingPosts = false;
        state.hasError = false;
      })
      .addCase(loadPopularPosts.rejected, (state, action) => {
        state.isLoadingPosts = false;
        state.hasError = true;
      });
  },
});

export default postsSlice.reducer;
export const selectAllPosts = (state) => state.posts.posts;
export const isLoading = (state) => state.posts.isLoadingPosts;
