import React from "react";
import { Avatar } from "@material-ui/core";
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

export const PostListItem = ({ post, loading }) => {
  const postData = post ? post.data : null;
  const validLinkCheck = post ? imageFile(postData.thumbnail) : null;
  const hasThumbnail = post ? (
    validLinkCheck ? (
      <Avatar alt={postData.subreddit} src={postData.thumbnail} />
    ) : (
      <Avatar>{postData.subreddit.substring(0, 1)}</Avatar>
    )
  ) : null;

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
      <h3 className={classes.postTitle}>{postData.title}</h3>
      <div className={classes.footer}>
        <div className={classes.comment}>
          <CommentIcon />
          <p>COMMENTS</p>
        </div>
      </div>
    </div>
  );
};
