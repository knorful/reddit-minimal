import axios from "axios";

export const API = {
  async loadSubreddits() {
    const reddits = await axios
      .get(`http://www.reddit.com/subreddits.json`)
      .then((res) => res.data.data.children);
    return reddits;
  },

  async loadPosts(reddit = "popular") {
    const posts = await axios
      .get(`https://www.reddit.com/r/${reddit}.json`)
      .then((res) => res.data.data.children);
    return posts;
  },

  async loadComments(reddit, id) {
    const comments = await axios
      .get(`http://www.reddit.com/r/${reddit}/comments/${id}.json`)
      .then((res) => res.data[1].data.children);
    return comments;
  },

  async loadPost(reddit, id) {
    const post = await axios
      .get(`http://www.reddit.com/r/${reddit}/${id}.json`)
      .then((res) => res.data[0].data.children[0].data);
    return post;
  },

  async aboutSubreddit(reddit) {
    const about = await axios
      .get(`http://www.reddit.com/r/${reddit}/about.json`)
      .then((res) => res.data.data);
    return about;
  },

  async getUserData(user) {
    const userData = await axios
      .get(`http://www.reddit.com/user/${user}.json`)
      .then((res) => res.data.data.children);
    return userData;
  },
};
