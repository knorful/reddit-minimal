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
import ReactMarkdown from "react-markdown";
import { format } from "timeago.js";
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

  let checkForSelfText =
    post.length !== 0 ? <ReactMarkdown source={post.selftext} /> : null;
  console.log(post);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Container>
          <div className={classes.PostContainer}>
            <div className={classes.Post}>
              {loadingPost ? (
                <PostSkeleton />
              ) : image ? (
                <>
                  <div className={classes.header}>
                    <p className={classes.headerAuthor}>{post.author}</p>
                    <p className={classes.headerTime}>
                      {format(post.created_utc * 1000)}
                    </p>
                  </div>
                  <h2>{post.title}</h2>
                  <div className={classes.postImgContainer}>
                    <img
                      className={classes.postImg}
                      src={image}
                      alt={post.title}
                    />
                  </div>
                </>
              ) : (
                <h1>{post.title}</h1>
              )}
              {checkForSelfText}
              <div className={classes.Comments}>
                <h3>Comments</h3>
                {!loadingComments
                  ? comments.map((comment) => (
                      <Comment comment={comment.data} />
                    ))
                  : null}
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
