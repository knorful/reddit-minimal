import React from "react";
import { Avatar } from "@material-ui/core";
import { Helpers } from "../../helpers/helpers";
import classes from "./Subreddit.module.css";

export const Subreddit = ({ subreddit }) => {
  console.log(subreddit);
  const subredditTopic = subreddit.data.display_name_prefixed;
  const hasIcon =
    subreddit.data.community_icon.length !== 0 || subreddit.data.icon_img;
  const iconLink = hasIcon
    ? Helpers.ampersandConverter(subreddit.data.icon_img)
    : null;
  const subs = Helpers.kFormatter(subreddit.data.subscribers);
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
