import { configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "../features/posts/postsSlice";
import { subredditsSlice } from "../features/subreddits/subredditsSlice";

export default configureStore({
  reducer: {
    posts: postsSlice.reducer,
    subreddits: subredditsSlice.reducer,
  },
});
