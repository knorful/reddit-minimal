import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllPosts, selectAllPosts } from "./postsSlice";
import { PostListItem } from "../../components/PostListItem/PostListItem";
import classes from "./Posts.module.css";

export const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);

  console.log(posts);

  useEffect(() => {
    dispatch(loadAllPosts());
  }, [dispatch]);

  return (
    <section className={classes.Posts}>
      {posts.map((post) => (
        <PostListItem post={post} />
      ))}
    </section>
  );
};
