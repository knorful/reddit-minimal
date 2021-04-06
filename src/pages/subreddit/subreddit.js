import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSubredditPosts,
  loadPostsBySubreddit,
} from "../../features/subreddit/subredditSlice";
import { PostListItem } from "../../components/PostListItem/PostListItem";
import { Navbar } from "../../components/Navbar/Navbar";
import { Subreddits } from "../../features/subreddits/Subreddits";
import classes from "./subreddit.module.css";

export const Subreddit = () => {
  const dispatch = useDispatch();
  const subredditPosts = useSelector(selectSubredditPosts);
  const { reddit } = useParams();

  useEffect(() => {
    dispatch(loadPostsBySubreddit(reddit));
  }, [dispatch, reddit]);

  return (
    <>
      <Navbar />
      <Container>
        <main className={classes.Subreddit}>
          <aside>
            <Subreddits />
          </aside>
          <div className={classes.post}>
            {subredditPosts.map((subredditPost) => (
              <PostListItem post={subredditPost} />
            ))}
          </div>
        </main>
      </Container>
    </>
  );
};
