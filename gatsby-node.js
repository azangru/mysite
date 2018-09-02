const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve("./src/templates/blog-post.js");

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 1000) {
              edges {
                node {
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.error(result.errors);
          reject(result.errors);
        }

        const {
           data: {
             allMarkdownRemark: {
               edges: markdownEdges
             }
           }
         } = result;

        // Create pages from markdown.
        markdownEdges.forEach(edge => {
          const slug = edge.node.fields.slug;
          if (!slug) return;

          if (slug.includes('/blog/') || slug.includes('/diary/')) {
            createPage({
              path: edge.node.fields.slug, // required
              component: blogPostTemplate,
              context: {
                slug: edge.node.fields.slug
              }
            });
          }

        });

      }).catch(error => console.error('graphql error:', error))
    );
  });
};

// Add custom slug for blog posts to both File and MarkdownRemark nodes.
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  switch (node.internal.type) {
    case 'File': {
      const parsedFilePath = path.parse(node.relativePath);
      const slug = ['blog', 'diary'].includes(node.sourceInstanceName) ?
        `/${node.sourceInstanceName}/${parsedFilePath.dir}/` : `/${parsedFilePath.dir}/`;
      createNodeField({
        node,
        name: 'slug',
        value: slug
      });
      return;
    }

    case 'MarkdownRemark': {
      const fileNode = getNode(node.parent);
      createNodeField({
        node,
        name: 'slug',
        value: fileNode.fields.slug,
      });
      return;
    }
  }
};

// TODO: this is a temporary config hack to load pdfs; remove when v2 stabilizes
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.pdf$/,
          use: 'url-loader',
        },
      ],
    },
  });
};
