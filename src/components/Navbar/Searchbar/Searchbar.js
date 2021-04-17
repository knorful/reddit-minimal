import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadSubreddits } from "../../../features/subreddits/subredditsSlice";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
  searchInput: {
    backgroundColor: "white",
    borderRadius: "4px",
    minWidth: "200px",
    width: "20vw",
  },
}));

export const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const handleChange = ({ target }) => {
    const term = target.value;
    setSearchTerm(term);
  };

  const handleSearch = () => {
    dispatch(loadSubreddits(searchTerm));
    history.push(`/subreddit/${searchTerm}`);
  };

  return (
    <div className={classes.Searchbar}>
      <form onSubmit={handleSearch}>
        <TextField
          className={classes.searchInput}
          onChange={handleChange}
          aria-label="Search Button"
          id="outlined-basic"
          placeholder="Search Communities.."
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </form>
    </div>
  );
};
