import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSubredditPosts,
  loadPostsBySubreddit,
  isLoadingSubredditPosts,
  selectSubredditsAbouts,
  loadAboutDetailsBySubreddit,
  isLoadingSubredditAbouts,
} from "../../features/subreddit/subredditSlice";
import { PostListItem } from "../../components/PostListItem/PostListItem";
import { Navbar } from "../../components/Navbar/Navbar";
import { Subreddits } from "../../features/subreddits/Subreddits";
import { PostListItemSkeleton } from "../../components/Skeletons/PostListItemSkeleton/PostListItem";
import classes from "./subreddit.module.css";

export const Subreddit = () => {
  const dispatch = useDispatch();
  const subredditPosts = useSelector(selectSubredditPosts);
  const loadingSubredditPosts = useSelector(isLoadingSubredditPosts);
  const subredditAbout = useSelector(selectSubredditsAbouts);
  const loadingSubredditAbouts = useSelector(isLoadingSubredditAbouts);

  const { reddit } = useParams();

  const showSubredditsByName = subredditPosts.map((subredditPost) => (
    <PostListItem post={subredditPost} />
  ));

  useEffect(() => {
    dispatch(loadPostsBySubreddit(reddit));
    dispatch(loadAboutDetailsBySubreddit(reddit));
  }, [dispatch, reddit]);

  console.log("abouts", subredditAbout);
  return (
    <>
      <Navbar />
      <Container>
        <main className={classes.Subreddit}>
          <aside>
            <Subreddits />
          </aside>
          <div className={classes.post}>
            {loadingSubredditPosts
              ? Array(8)
                  .fill(0)
                  .map((el) => (
                    <div className={classes.skeleton}>
                      <PostListItemSkeleton />
                    </div>
                  ))
              : showSubredditsByName}
          </div>
        </main>
      </Container>
    </>
  );
};
