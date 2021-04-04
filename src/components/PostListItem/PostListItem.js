import { Avatar } from "@material-ui/core";
import React from "react";
import CommentIcon from "@material-ui/icons/Comment";
import classes from "./PostListItem.module.css";

const imageFile = (str) => {
  var myRegex = /(https?:\/\/.*\.(?:png|jpg))/i;

  if (str.length === 0) {
    return false;
  }

  if (myRegex.test(str)) {
    return true;
  }
};

export const PostListItem = ({ post }) => {
  const postData = post.data;
  const validLinkCheck = imageFile(postData.thumbnail);
  const hasThumbnail = validLinkCheck ? (
    <Avatar alt={postData.subreddit} src={postData.thumbnail} />
  ) : (
    <Avatar>{postData.subreddit.substring(0, 1)}</Avatar>
  );

  return (
    <div className={classes.PostListItem}>
      <div className={classes.header}>
        {hasThumbnail}
        <div className={classes.headerContent}>
          <p className={classes.subredditName}>
            {postData.subreddit_name_prefixed}
          </p>
          <p className={classes.author}>Posted by u/{postData.author}</p>
        </div>
      </div>
      <h3>{postData.title}</h3>
      <div className={classes.footer}>
        <div className={classes.comment}>
          <CommentIcon />
          <p>COMMENTS</p>
        </div>
      </div>
    </div>
  );
};
