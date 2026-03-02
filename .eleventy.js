import {
  EleventyRenderPlugin,
  HtmlBasePlugin
} from '@11ty/eleventy';
import pluginRss from '@11ty/eleventy-plugin-rss';
import pluginSyntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import bundlerPlugin from '@11ty/eleventy-plugin-bundle';
import markdownIt from 'markdown-it';
import yaml from 'js-yaml';

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets');

  /**
   * For the Blog section
   * 1. Combine the year directory with blog file name in the url
   * /blog/2018/foo.md --> /blog/2018-foo/index.html
   */
  eleventyConfig.addFilter('blogPermalink', function (filePath = '') {
    const yearRegex = /([0-9]{4})\//;

    return filePath.replace(yearRegex, "$1-");
  });

  eleventyConfig.addFilter('reactionPermalink', function (page) {
    const permalink = `reactions/${page.fileSlug}/`;
    return permalink;
  });

  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(bundlerPlugin);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addDataExtension("yml", yaml.load);
  eleventyConfig.addDataExtension("yaml", yaml.load);

  eleventyConfig.addCollection('blogArticles', (collection) => {
    const blogArticles = collection.getFilteredByGlob(["src/blog/**/*.md", "src/blog/**/*.njk"])
      .filter(article => article.data.published);
    blogArticles.sort((a, b) => {
      return b.data.page.date - a.data.page.date;
    });
    return blogArticles;
  });

  eleventyConfig.addCollection('reactions', (collection) => {
    const entries = collection.getFilteredByGlob("src/reactions/**/*.md");
    entries.sort((a, b) => {
      return b.fileSlug.localeCompare(a.fileSlug);
    });
    return entries;
  });

  eleventyConfig.addFilter("readableDate", dateStr => {
    const date = new Date(dateStr);
    const formatter = new Intl.DateTimeFormat('en-US', {
      year: 'numeric', month: '2-digit', day: '2-digit'
    });
    const parts = formatter.formatToParts(date);
    const { year, month, day } = Object.fromEntries(parts.map(p => [p.type, p.value]));
    return `${year}-${month}-${day}`;
  });


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
    typographer: true,
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
    pathPrefix: '/mysite/'
  };
};
