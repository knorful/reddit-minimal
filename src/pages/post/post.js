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
import { format } from "timeago.js";
import ReactMarkdown from "react-markdown";
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

  let image = Helpers.getImage(post);
  let selfText = <ReactMarkdown source={Helpers.getSelfText(post)} />;
  let video = !loadingPost && Helpers.getVideo(post);

  return (
    <>
      <Navbar />
      <main>
        <Container>
          {/* Post */}
          <div className={classes.PostContainer}>
            <div className={classes.Post}>
              {loadingPost ? (
                <PostSkeleton />
              ) : video ? (
                <>
                  <div className={classes.header}>
                    <p className={classes.headerAuthor}>{post.author}</p>
                    <p className={classes.headerTime}>
                      {format(post.created_utc * 1000)}
                    </p>
                  </div>
                  <div className={classes.title}>
                    <h2>{post.title}</h2>
                    <hr />
                  </div>
                  <div className={classes.video}>
                    <video src={video} controls autoPlay>
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </>
              ) : image ? (
                <>
                  <div className={classes.header}>
                    <p className={classes.headerAuthor}>{post.author}</p>
                    <p className={classes.headerTime}>
                      {format(post.created_utc * 1000)}
                    </p>
                    <p className={classes.headerTopic}>
                      {post.subreddit_name_prefixed}
                    </p>
                  </div>
                  <div className={classes.title}>
                    <h2>{post.title}</h2>
                    <hr />
                  </div>
                  <div className={classes.postImgContainer}>
                    <img
                      className={classes.postImg}
                      src={image}
                      alt={post.title}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className={classes.header}>
                    <p className={classes.headerAuthor}>{post.author}</p>
                    <p className={classes.headerTime}>
                      {format(post.created_utc * 1000)}
                    </p>
                  </div>
                  <div className={classes.title}>
                    <h2>{post.title}</h2>
                    <hr />
                  </div>
                </>
              )}
              <div className={classes.selfText}>{selfText}</div>

              {/* Comments */}
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
