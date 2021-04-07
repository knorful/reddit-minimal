import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import CommentIcon from "@material-ui/icons/Comment";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Helpers } from "../../helpers/helpers";
import { format } from "timeago.js";
import ReactMarkdown from "react-markdown";
import classes from "./PostListItem.module.css";

export const PostListItem = ({ post }) => {
  const postData = post ? post.data : null;
  console.log("postlistitem", postData);
  const video = Helpers.getVideo(postData);
  const voteCount = Helpers.kFormatter(postData.ups);
  const author = postData.author;
  const selfText = <ReactMarkdown source={Helpers.getSelfText(postData)} />;

  const validLinkCheckForThumbnail = post
    ? Helpers.imageFile(postData.thumbnail)
    : null;

  const validLinkCheckForContentImg = post
    ? Helpers.imageFile(postData.url)
    : null;

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
            className={classes.cardMedia}
            image={postData.url}
          ></CardMedia>
        </CardActionArea>
      </Card>
    ) : postData.url_overridden_by_dest ? (
      <a
        href={postData.url_overridden_by_dest}
        alt={postData.title}
        target="_blank"
        rel="noreferrer"
        className={classes.contentLink}
      >
        External Link
      </a>
    ) : null
  ) : null;

  return (
    <div className={classes.PostListItem}>
      <div className={classes.header}>
        {hasThumbnail}
        <div className={classes.headerContent}>
          <Link to={`/subreddit/${postData.subreddit}`}>
            <p className={classes.subredditName}>
              {postData.subreddit_name_prefixed}
            </p>
          </Link>
          <Link to={`/user/${author}`}>
            <p className={classes.author}>Posted by u/{author}</p>
          </Link>
        </div>
      </div>
      <div className={classes.mainContent}>
        <div className={classes.wrapper}>
          <Link
            className={classes.postTitle}
            to={`/post/${postData.subreddit}/comments/${postData.id}`}
          >
            <h3>{postData.title}</h3>
          </Link>
          {selfText}
        </div>
        {video ? (
          <CardMedia
            component="video"
            type="video/mp4"
            alt={postData.subreddit}
            height="140"
            className={classes.cardMedia}
            src={video}
            autoPlay
            controls
            loop
            muted
          ></CardMedia>
        ) : hasContentImg ? (
          <div className={classes.contentImg}>{hasContentImg}</div>
        ) : null}
      </div>
      <div className={classes.footer}>
        <div className={classes.ups}>
          <FavoriteBorderIcon />
          <p>{voteCount}</p>
        </div>
        <div className={classes.comment}>
          <Link
            to={`/post/${postData.subreddit}/comments/${postData.id}`}
            className={classes.commentBtn}
          >
            <button>
              <CommentIcon />
              <p style={{ fontWeight: "500", fontSize: "1rem" }}>COMMENTS</p>
            </button>
          </Link>
          <p className={classes.timeCreated}>
            {format(postData.created_utc * 1000)}
          </p>
        </div>
      </div>
    </div>
  );
};
