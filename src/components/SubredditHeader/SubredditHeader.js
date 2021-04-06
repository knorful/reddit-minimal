import React from "react";
import classes from "./SubredditHeader.module.css";

export const SubredditHeader = ({ img, backColor }) => {
  return (
    <div
      className={classes.SubredditHeader}
      style={{ backgroundColor: `${backColor}` }}
    >
      <img src={img} />
    </div>
  );
};
