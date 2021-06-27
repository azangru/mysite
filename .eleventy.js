const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const yaml = require("js-yaml");
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addDataExtension("yml", yaml.load);
  eleventyConfig.addDataExtension("yaml", yaml.load);

  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

  eleventyConfig.addCollection('blogArticles', (collection) => {
    const blogArticles = collection.getFilteredByGlob("src/blog/**/*.md")
      .filter(article => article.data.published);
    blogArticles.sort((a, b) => {
      return b.data.page.date - a.data.page.date;
    });
    return blogArticles;
  });

  eleventyConfig.addCollection('diary', (collection) => {
    const diaryEntries = collection.getFilteredByGlob("src/diary/**/*.md");
    diaryEntries.sort((a, b) => {
      return b.data.title - a.data.title;
    });
    return diaryEntries;
  });

  eleventyConfig.addFilter("readableDate", dateStr => {
    return DateTime.fromFormat(dateStr, 'yyyy-MM-dd').toFormat("dd LLL yyyy");
  });
  //
  // // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  // eleventyConfig.addFilter('htmlDateString', (dateObj) => {
  //   return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  // });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if( n < 0 ) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  eleventyConfig.addPassthroughCopy({
    "src/static": "/"
  });

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    // breaks: true,
    // linkify: true
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  // Browsersync Overrides
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('build/404.html');

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false
  });

  return {
    templateFormats: [
      "md",
      "njk",
      "html"
    ],

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",

    // These are all optional, defaults are shown:
    dir: {
      input: "src",
      includes: "_includes",
      // data: "_data",
      output: "build"
    }
  };
};
