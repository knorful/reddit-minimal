import { configureStore } from "@reduxjs/toolkit";
import { commentsSlice } from "../features/comments/commentsSlice";
import { postsSlice } from "../features/posts/postsSlice";
import { subredditsSlice } from "../features/subreddits/subredditsSlice";

export default configureStore({
  reducer: {
    posts: postsSlice.reducer,
    subreddits: subredditsSlice.reducer,
    comments: commentsSlice.reducer,
  },
});
