import {
  EleventyRenderPlugin,
  EleventyHtmlBasePlugin
} from '@11ty/eleventy';
import pluginRss from '@11ty/eleventy-plugin-rss';
import pluginSyntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import bundlerPlugin from '@11ty/eleventy-plugin-bundle';
import markdownIt from 'markdown-it';
import yaml from 'js-yaml';
import { DateTime } from 'luxon';

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets');

  /**
   * For the Blog section
   * 1. Combine the year directory with blog file name in the url
   * /blog/2018/foo.md --> /blog/2018-foo/index.html
   */
  eleventyConfig.addFilter('blogPermalink', function (filePath = '') {
    console.log(filePath);

    const yearRegex = /([0-9]{4})\//;

    return filePath.replace(yearRegex, "$1-");
  });

  eleventyConfig.setServerPassthroughCopyBehavior("passthrough"); // FIXME: this is temporary; should remove when the issue is fixed

  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(bundlerPlugin);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addDataExtension("yml", yaml.load);
  eleventyConfig.addDataExtension("yaml", yaml.load);

  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

  eleventyConfig.addCollection('blogArticles', (collection) => {
    const blogArticles = collection.getFilteredByGlob(["src/blog/**/*.md", "src/blog/**/*.njk"])
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

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    // breaks: true,
    // linkify: true
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

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
    },

    // For deployment to github pages, will need to add a path prefix
    // pathPrefix: '/mysite/'
  };
};
