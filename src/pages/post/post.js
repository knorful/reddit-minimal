import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  loadCommentsForPostId,
  selectComments,
  isLoadingComments,
} from "../../features/comments/commentsSlice";
import {
  selectPost,
  isLoadingPost,
  loadPost,
} from "../../features/post/postSlice";
import { Comment } from "../../components/Comment/Comment";
import { Helpers } from "../../helpers/helpers";
import { Subreddits } from "../../features/subreddits/Subreddits";
import { Navbar } from "../../components/Navbar/Navbar";
import { PostSkeleton } from "../../components/Skeletons/PostSkeleton/Post";
import classes from "./post.module.css";

export const Post = () => {
  let { reddit, id } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);
  const post = useSelector(selectPost);
  const loadingComments = useSelector(isLoadingComments);
  const loadingPost = useSelector(isLoadingPost);

  useEffect(() => {
    dispatch(loadPost({ reddit, id }));
    dispatch(loadCommentsForPostId({ reddit, id }));
  }, [dispatch, reddit, id]);

  let image =
    post.length !== 0 && post.hasOwnProperty("preview")
      ? Helpers.ampersandConverter(post.preview.images[0].source.url)
      : null;

  let checkForSelfText = post.length !== 0 ? post.selftext : null;
  console.log(loadingPost);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Container>
          <div className={classes.PostContainer}>
            <div className={classes.Post}>
              <h1>{post.title}</h1>
              {loadingPost ? (
                <PostSkeleton />
              ) : image ? (
                <div className={classes.postImgContainer}>
                  <img
                    className={classes.postImg}
                    src={image}
                    alt={post.title}
                  />
                </div>
              ) : null}
              {checkForSelfText}
              <div className={classes.Comments}>
                <h2>Comments</h2>
                {comments.map((comment) => (
                  <Comment comment={comment.data.body} />
                ))}
              </div>
            </div>
            <aside>
              <Subreddits />
            </aside>
          </div>
        </Container>
      </main>
    </>
  );
};
