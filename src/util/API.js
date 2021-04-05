import axios from "axios";

export const API = {
  async loadSubreddits() {
    const reddits = await axios
      .get(`http://www.reddit.com/subreddits.json`)
      .then((res) => res.data.data.children);
    return reddits;
  },

  async loadPopularPosts() {
    const popularPosts = await axios
      .get("https://www.reddit.com/r/popular.json")
      .then((res) => res.data.data.children);
    return popularPosts;
  },

  async loadComments(reddit, id) {
    const comments = await axios
      .get(`http://www.reddit.com/r/${reddit}/comments/${id}.json`)
      .then((res) => res.data[1].data.children);
    return comments;
  },
};
