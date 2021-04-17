import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadSubreddits } from "../../../features/subreddits/subredditsSlice";
import { withStyles } from "@material-ui/core/styles";
import fetch from "cross-fetch";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import SearchIcon from "@material-ui/icons/Search";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const CssTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "red",
      },
      "&.Mui-focused fieldset": {
        borderColor: "red",
      },
    },
    backgroundColor: "white",
    borderRadius: "4px",
    width: "30vw",
    minWidth: "200px",
  },
})(TextField);

export const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("Search...");
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  const dispatch = useDispatch();

  React.useEffect(() => {
    let active = true;
    (async () => {
      const response = await fetch(
        `https://www.reddit.com/api/subreddit_autocomplete.json?query=${searchTerm}`
      );
      await sleep(1e3);
      const data = await response.json();
      if (active) {
        setOptions(data.subreddits.map((r) => r));
      }
      return () => {
        active = false;
      };
    })();
  }, [loading, searchTerm]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const handleChange = ({ target }) => {
    const term = target.value;
    setSearchTerm(term);
  };

  const handleSearch = () => {
    dispatch(loadSubreddits(searchTerm));
    // history.push(`/subreddit/${searchTerm}`);
  };

  return (
    <Autocomplete
      style={{ width: 300 }}
      disableClearable={false}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <CssTextField
          onChange={handleChange}
          {...params}
          placeholder={searchTerm}
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            type: "search",
            startAdornment: <SearchIcon />,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
              </React.Fragment>
            ),
          }}
        />
      )}
      renderOption={(option, { inputValue }) => {
        const matches = match(option.name, inputValue);
        const parts = parse(option.name, matches);
        console.log("option", matches);
        return (
          <div>
            {parts.map((part, index) => (
              <span
                key={index}
                style={{ fontWeight: part.highlight ? 700 : 400 }}
              >
                {part.text}
              </span>
            ))}
          </div>
        );
      }}
    />
  );
};

// export const Searchbar = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const classes = useStyles();

//   const handleChange = ({ target }) => {
//     const term = target.value;
//     setSearchTerm(term);
//   };

//   const handleSearch = () => {
//     dispatch(loadSubreddits(searchTerm));
//     history.push(`/subreddit/${searchTerm}`);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSearch}>
//         <CssTextField
//           onChange={handleChange}
//           aria-label="Search Button"
//           id="outlined-basic"
//           placeholder="Search Communities.."
//           variant="outlined"
//           fullWidth
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <SearchIcon />
//               </InputAdornment>
//             ),
//           }}
//         />
//       </form>
//       {searchTerm ? <div>searching</div> : null}
//     </div>
//   );
// };
