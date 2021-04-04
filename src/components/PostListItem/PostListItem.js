import React from "react";
import { Avatar } from "@material-ui/core";
import CommentIcon from "@material-ui/icons/Comment";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
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

const kFormatter = (num) => {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
};

export const PostListItem = ({ post, loading }) => {
  const postData = post ? post.data : null;
  const validLinkCheckForThumbnail = post
    ? imageFile(postData.thumbnail)
    : null;

  const validLinkCheckForContentImg = post ? imageFile(postData.url) : null;

  const hasThumbnail = post ? (
    validLinkCheckForThumbnail ? (
      <Avatar alt={postData.subreddit} src={postData.thumbnail} />
    ) : (
      <Avatar>{postData.subreddit.substring(0, 1)}</Avatar>
    )
  ) : null;

  const hasContentImg = post ? (
    validLinkCheckForContentImg ? (
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={postData.subreddit}
            height="140"
            style={{ width: "250px", maxWidth: "320px" }}
            image={postData.url}
          ></CardMedia>
        </CardActionArea>
      </Card>
    ) : (
      <a
        href={postData.url}
        alt={postData.title}
        target="_blank"
        rel="noreferrer"
        className={classes.contentLink}
      >
        External Link
      </a>
    )
  ) : null;

  const voteCount = kFormatter(postData.ups);

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
      <div className={classes.mainContent}>
        <h3 className={classes.postTitle}>{postData.title}</h3>
        {hasContentImg}
      </div>
      <div className={classes.footer}>
        <div className={classes.ups}>
          <FavoriteBorderIcon />
          <p>{voteCount}</p>
        </div>
        <div className={classes.comment}>
          <CommentIcon />
          <p>COMMENTS</p>
        </div>
      </div>
    </div>
  );
};
