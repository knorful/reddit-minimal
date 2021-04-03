import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllPosts } from "./postsSlice";
import { PostListItem } from "../../components/PostListItem/PostListItem";

export const Posts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllPosts());
  }, [dispatch]);

  return <h2>Posts will go here</h2>;
};
