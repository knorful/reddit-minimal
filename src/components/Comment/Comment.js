import React from "react";
import classes from "./Comment.module.css";

export const Comment = ({ comment }) => {
  return <div className={classes.Comment}>{comment}</div>;
};
