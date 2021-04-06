import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSubredditPosts,
  loadPostsBySubreddit,
} from "../../features/subreddit/subredditSlice";

export const Subreddit = () => {
  const dispatch = useDispatch();
  const subredditPosts = useSelector(selectSubredditPosts);
  const { reddit } = useParams();

  useEffect(() => {
    dispatch(loadPostsBySubreddit(reddit));
  }, [dispatch, reddit]);

  console.log("subredditPosts", subredditPosts);

  return (
    <div>
      <h1>Subreddit</h1>
    </div>
  );
};
