import { configureStore } from "@reduxjs/toolkit";
import { commentsSlice } from "../features/comments/commentsSlice";
import { postsSlice } from "../features/posts/postsSlice";
import { subredditsSlice } from "../features/subreddits/subredditsSlice";
import { postSlice } from "../features/post/postSlice";
import { subredditSlice } from "../features/subreddit/subredditSlice";

export default configureStore({
  reducer: {
    post: postSlice.reducer,
    posts: postsSlice.reducer,
    subreddits: subredditsSlice.reducer,
    subreddit: subredditSlice.reducer,
    comments: commentsSlice.reducer,
  },
});
