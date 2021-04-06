import React from "react";
import { Avatar, Container } from "@material-ui/core";
import classes from "./SubredditHeader.module.css";

export const SubredditHeader = ({ img, backColor, title, icon, reddit }) => {
  return (
    <div>
      <figure
        className={classes.imgContainer}
        style={{
          backgroundColor: backColor ? `${backColor}` : "rgb(65, 64, 64)",
        }}
      >
        {img ? (
          <img src={img} alt={title} />
        ) : (
          <div className={classes.noImg}></div>
        )}
      </figure>
      <div className={classes.headerDivide}>
        <Container maxWidth="sm">
          <div className={classes.headerContent}>
            <img className={classes.avatar} src={icon} alt={title} />
            <div className={classes.reddit}>
              <p className={classes.title}>{title}</p>
              <p className={classes.redditTopic}>{`r/${reddit}`}</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
