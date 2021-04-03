import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadAllPosts = createAsyncThunk("posts/loadAllPosts", async () => {
  const data = await axios
    .get("https://www.reddit.com/r/popular.json")
    .then((res) => res.data.data.children);
  return data;
});
