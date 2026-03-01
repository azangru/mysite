export default {
  layout: "layouts/post.njk",
  permalink(data) {
    return `${this.reactionPermalink(data.page)}`;
  },
};
