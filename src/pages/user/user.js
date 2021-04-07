import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  loadUserData,
  selectUserData,
  loadAboutData,
  selectAboutData,
} from "../../features/user/userSlice";
import { PostListItem } from "../../components/PostListItem/PostListItem";
import { Subreddits } from "../../features/subreddits/Subreddits";
import { Navbar } from "../../components/Navbar/Navbar";
import { Container } from "@material-ui/core";
import { About } from "../../components/About/About";
import { Helpers } from "../../helpers/helpers";
import classes from "./user.module.css";

export const User = () => {
  const { user } = useParams();
  const dispatch = useDispatch();
  const selectedUserData = useSelector(selectUserData);
  const selectedAboutData = useSelector(selectAboutData);

  useEffect(() => {
    dispatch(loadUserData(user));
    console.log("dispatch user", user);
    dispatch(loadAboutData(user));
  }, [dispatch, user]);

  const approvedUserData = selectedUserData.filter(
    (post) => post.data.thumbnail
  );

  //Get user about details to send to About component
  const name = selectedAboutData.name;
  const cake_day = selectedAboutData.created_utc;
  const karma = selectedAboutData.awardee_karma;
  const userImg = Helpers.ampersandConverter(selectedAboutData.icon_img);
  const bannerImg = selectedAboutData.subreddit
    ? Helpers.ampersandConverter(selectedAboutData.subreddit.banner_img)
    : null;

  return (
    <div>
      <Navbar />
      <Container>
        <main className={classes.User}>
          <aside>
            <About
              name={name}
              cake_day={cake_day}
              karma={karma}
              userImg={userImg}
              bannerImg={bannerImg}
            />
            <Subreddits />
          </aside>
          <section>
            {approvedUserData ? (
              approvedUserData.map((userData, key) => (
                <PostListItem key={key} post={userData} />
              ))
            ) : (
              <h1>Not yet!!</h1>
            )}
          </section>
        </main>
      </Container>
    </div>
  );
};
