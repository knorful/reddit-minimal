import React from "react";
import { Helpers } from "../../helpers/helpers";
import classes from "./About.module.css";

export const About = ({ name, cake_day, karma, userImg, bannerImg, title }) => {
  let creationDay = Helpers.getDate(cake_day);

  return (
    <div className={classes.About}>
      <div className={classes.header}>
        {bannerImg ? (
          <img
            className={classes.banner}
            src={bannerImg}
            alt={`${name} banner`}
          />
        ) : (
          <div
            className={classes.banner}
            style={{ height: "100px", backgroundColor: "#FF4500" }}
          ></div>
        )}
        <img
          className={classes.profilePic}
          src={userImg}
          alt={`${name} profile pic`}
        />
      </div>
      <p className={classes.aboutHeader}>About ${name}</p>
      <hr />
      <div className={classes.info}>
        <p className={classes.name}>{name}</p>
        <p>{title}</p>
        <div className={classes.additionalInfo}>
          <div className={classes.karma}>
            <h3>Karma</h3>
            <p>{Helpers.kFormatter(karma)}</p>
          </div>
          <div className={classes.cake_day}>
            <h3>Cake Day</h3>
            <p>{`${creationDay.month} ${creationDay.day}, ${creationDay.year}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
