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
import { SubredditHeader } from "../../components/SubredditHeader/SubredditHeader";
import { Helpers } from "../../helpers/helpers";
import classes from "./subreddit.module.css";

export const Subreddit = () => {
  const dispatch = useDispatch();
  const subredditPosts = useSelector(selectSubredditPosts);
  const loadingSubredditPosts = useSelector(isLoadingSubredditPosts);
  const subredditAbout = useSelector(selectSubredditsAbouts);
  const loadingSubredditAbouts = useSelector(isLoadingSubredditAbouts);

  const { reddit } = useParams();

  const bannerBackground = Helpers.ampersandConverter(
    subredditAbout.banner_background_image
  );
  const headerImg = Helpers.ampersandConverter(subredditAbout.header_img);
  const backColor = subredditAbout.banner_background_color;
  const iconImg = subredditAbout.icon_img;
  const redditTitle = subredditAbout.title;

  const showSubredditsByName = subredditPosts.map((subredditPost) => (
    <PostListItem post={subredditPost} />
  ));

  useEffect(() => {
    dispatch(loadPostsBySubreddit(reddit));
    dispatch(loadAboutDetailsBySubreddit(reddit));
  }, [dispatch, reddit]);

  return (
    <>
      <Navbar />
      <SubredditHeader
        title={redditTitle}
        icon={iconImg}
        img={bannerBackground || headerImg}
        backColor={backColor}
        reddit={reddit}
      />
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
