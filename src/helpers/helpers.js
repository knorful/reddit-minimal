export const Helpers = {
  imageFile(str) {
    var myRegex = /(https?:\/\/.*\.(?:png|jpg))/i;

    if (str.length === 0) {
      return false;
    }

    if (myRegex.test(str)) {
      return true;
    }
  },

  kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  },

  ampersandConverter(url) {
    let regex = /(&amp;|&)/gi;
    let convertedLink = url ? url.replace(regex, "&") : null;
    return convertedLink;
  },

  getSelfText(post) {
    return post.length !== 0 ? post.selftext : null;
  },

  getImage(post) {
    if (post.length !== 0 && post.hasOwnProperty("preview")) {
      return Helpers.ampersandConverter(post.preview.images[0].source.url);
    }
  },

  getVideo(post) {
    return post.is_video ? post.secure_media.reddit_video.fallback_url : null;
  },
};
