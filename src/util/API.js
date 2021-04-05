import axios from "axios";

export const API = {
  async loadSubreddits() {
    const data = await axios
      .get(`http://www.reddit.com/subreddits.json`)
      .then((res) => res.data.data.children);
    return data;
  },

  async loadPopularPosts() {
    const data = await axios
      .get("https://www.reddit.com/r/popular.json")
      .then((res) => res.data.data.children);
    return data;
  },
};
