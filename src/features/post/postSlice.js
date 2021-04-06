import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../util/API";

export const loadPost = createAsyncThunk("post/loadPost", ({ reddit, id }) =>
  API.loadPost(reddit, id)
);

export const postSlice = createSlice({
  name: "post",
  initialState: {
    post: [],
    loadingPost: false,
    hasErrors: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPost.pending, (state, action) => {
        state.loadingPost = true;
        state.hasErrors = false;
      })
      .addCase(loadPost.fulfilled, (state, action) => {
        state.post = action.payload;
        state.loadingPost = false;
        state.hasErrors = false;
      })
      .addCase(loadPost.rejected, (state, action) => {
        state.loadingPost = false;
        state.hasErrors = true;
      });
  },
});

export default postSlice.reducer;
export const selectPost = (state) => state.post.post;
export const isLoadingPost = (state) => state.post.loadingPost;
