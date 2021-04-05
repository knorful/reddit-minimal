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
};
