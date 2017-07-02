module.exports = {
  siteMetadata: {
    title: `My Sweet Gatsby Site!`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    // read all files in the pages folder
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    // read all files in the blog folder
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-sharp`
  ]
};
