import { Avatar } from "@material-ui/core";
import React from "react";
import classes from "./PostListItem.module.css";

export const PostListItem = ({ post }) => {
  const imageFile = (str) => {
    var myRegex = /(https?:\/\/.*\.(?:png|jpg))/i;

    if (str.length === 0) {
      return false;
    }

    if (myRegex.test(str)) {
      return true;
    }
  };
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
        <p className={classes.subredditName}>
          {postData.subreddit_name_prefixed}
        </p>
        <p className={classes.author}>Posted by u/{postData.author}</p>
      </div>
      <h3>{postData.title}</h3>
    </div>
  );
};
