import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllPosts, selectAllPosts, isLoading } from "./postsSlice";
import { PostListItem } from "../../components/PostListItem/PostListItem";
import { PostListItemSkeleton } from "../../components/Skeletons/PostListItem";
import classes from "./Posts.module.css";

export const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const loading = useSelector(isLoading);

  useEffect(() => {
    dispatch(loadAllPosts());
  }, [dispatch]);

  return (
    <section className={classes.Posts}>
      {posts.length === 0
        ? Array(25)
            .fill(0)
            .map((skeleton, key) => (
              <div key={key} style={{ marginBottom: "20px" }}>
                <PostListItemSkeleton />
              </div>
            ))
        : posts.map((post, key) => (
            <PostListItem key={post.data.id} post={post} loading={loading} />
          ))}
    </section>
  );
};
