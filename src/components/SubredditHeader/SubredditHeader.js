import React from "react";
import { Avatar, Container } from "@material-ui/core";
import classes from "./SubredditHeader.module.css";

export const SubredditHeader = ({ img, backColor, title, icon, reddit }) => {
  const chooseBackColor = backColor ? `${backColor}` : "rgb(65, 64, 64)";
  const headerStyles = {
    backgroundColor: chooseBackColor,
    background: `url(${img})`,
    height: "350px",
  };
  return (
    <div>
      <figure className={classes.imgContainer} style={headerStyles}>
        {!img ? <div className={classes.noImg}></div> : null}
      </figure>
      <div className={classes.headerDivide}>
        <Container maxWidth="sm">
          <div className={classes.headerContent}>
            <Avatar
              style={{ width: "100px", height: "100px" }}
              className={classes.avatar}
              src={icon}
              alt={title}
            />
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
