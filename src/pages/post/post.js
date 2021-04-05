import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  loadCommentsForPostId,
  selectComments,
} from "../../features/comments/commentsSlice";

export const Post = () => {
  let { reddit, id } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);

  useEffect(() => {
    dispatch(loadCommentsForPostId({ reddit, id }));
  }, [dispatch, reddit, id]);

  return (
    <div>
      <h1>Post will go here</h1>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <div>{comment.data.body}</div>
      ))}
    </div>
  );
};
