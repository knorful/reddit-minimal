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
    //TODO: improve logic to check if post has reddit video in preview prop
    // let hasPreviewProp = post.hasOwnProperty("preview");
    // if (hasPreviewProp) {
    //   if (post.preview.hasOwnProperty("reddit_video_preview")) {
    //     return this.convertGifToMP4(
    //       post.preview.reddit_video_preview.fallback_url
    //       );
    //     }
    //   }
    const regex = /(gifv)/gi;
    if (post.is_video) {
      return post.secure_media.reddit_video.fallback_url;
    }
    console.log("converting...", post);
    if (post.length !== 0 && post.url.match(regex)) {
      return this.convertGifToMP4(post.url);
    }
  },

  convertGifToMP4(url) {
    const regex = /(gifv)/gi;
    let convertedLink = url.replace(regex, "mp4");
    console.log("converted", convertedLink);
    return convertedLink;
  },
};
