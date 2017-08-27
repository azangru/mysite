const path = require("path");

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve("./src/templates/blog-post.js");
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
          console.log(result.errors);
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

          if (slug.includes('/blog/')) {
            createPage({
              path: edge.node.fields.slug, // required
              component: blogPostTemplate,
              context: {
                slug: edge.node.fields.slug
              }
            });
          } else {
            createPage({
              path: edge.node.fields.slug, // required
              component: blogPostTemplate,
              context: {
                slug: edge.node.fields.slug
              }
            });
          }

        });

      }).catch(error => console.log('graphql error:', error))
    );
  });
};

// Add custom slug for blog posts to both File and MarkdownRemark nodes.
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  switch (node.internal.type) {
    case 'File': {
      const parsedFilePath = path.parse(node.relativePath);
      const isBlogPost = node.sourceInstanceName === 'blog';
      const slug = isBlogPost ? `/blog/${parsedFilePath.dir}/` : `/${parsedFilePath.dir}/`;
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
