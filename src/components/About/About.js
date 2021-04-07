import React from "react";
import classes from "./About.module.css";

export const About = ({ name, cake_day, karma, userImg, bannerImg }) => {
  console.log("userImg", userImg);
  return (
    <div className={classes.About}>
      <div className={classes.header}>
        {bannerImg ? <img src={bannerImg} alt={`${name} banner`} /> : null}
        <img src={userImg} alt={`${name} profile pic`} />
      </div>
      <p>{name}</p>
      <p>{karma}</p>
      <p>{cake_day}</p>
    </div>
  );
};
