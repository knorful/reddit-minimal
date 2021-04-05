import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSubreddits, loadSubreddits } from "./subredditsSlice";
import { Subreddit } from "../../components/Subreddit/Subreddit";
import classes from "./Subreddits.module.css";

export const Subreddits = () => {
  const [showAll, setShowAll] = useState(false);
  const [itemsShown, setItemsShown] = useState(8);
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);

  const handleClick = () => {
    setShowAll(!showAll);
    !showAll ? setItemsShown(25) : setItemsShown(8);
  };

  useEffect(() => {
    dispatch(loadSubreddits());
  }, [dispatch]);

  return (
    <div className={classes.Subreddits}>
      <p className={classes.header}>POPULAR SUBREDDITS</p>
      {!showAll
        ? subreddits
            .slice(0, itemsShown - 1)
            .map((subreddit) => <Subreddit subreddit={subreddit} />)
        : subreddits.map((subreddit) => <Subreddit subreddit={subreddit} />)}
      <button className={classes.expandBtn} onClick={handleClick}>
        All Subreddits
      </button>
    </div>
  );
};
