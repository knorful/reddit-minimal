import React from "react";
import classes from "./Comment.module.css";
import { format } from "timeago.js";
import { Helpers } from "../../helpers/helpers";
import PublishIcon from "@material-ui/icons/Publish";

export const Comment = ({ comment }) => {
  const commentAuthor = comment.author;
  const timeCreated = format(comment.created_utc * 1000);
  const upvotes = comment.ups;

  return (
    <div className={classes.Comment}>
      <div className={classes.header}>
        <p className={classes.author}>{commentAuthor}</p>
        <p className={classes.timeCreated}>{timeCreated}</p>
      </div>
      <p>{comment.body}</p>
      <div className={classes.footer}>
        <PublishIcon />
        <p className={classes.upvotes}>{Helpers.kFormatter(upvotes)} UPVOTES</p>
      </div>
    </div>
  );
};
