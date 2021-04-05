import React from "react";
import { Avatar } from "@material-ui/core";
import classes from "./Subreddit.module.css";

const ampersandConverter = (url) => {
  let regex = /(&amp;|&)/gi;
  let convertedLink = url ? url.replace(regex, "&") : null;
  return convertedLink;
};

const kFormatter = (num) => {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
};

export const Subreddit = ({ subreddit }) => {
  console.log(subreddit);
  const subredditTopic = subreddit.data.display_name_prefixed;
  const hasIcon =
    subreddit.data.community_icon.length !== 0 || subreddit.data.icon_img;
  const iconLink = hasIcon ? ampersandConverter(subreddit.data.icon_img) : null;
  const subs = kFormatter(subreddit.data.subscribers);
  const displayIcon = hasIcon ? (
    <Avatar src={iconLink} />
  ) : (
    <Avatar>{subreddit.data.display_name_prefixed.substring(2, 3)}</Avatar>
  );
  return (
    <div className={classes.Subreddit}>
      {displayIcon}
      <div className={classes.subInfo}>
        <p className={classes.topic}>{subredditTopic}</p>
        <p className={classes.subs}>{subs} subscribers</p>
      </div>
    </div>
  );
};
