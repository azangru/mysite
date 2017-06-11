import React from "react"; // a dependency of Gatsby
import graphql from 'graphql'; // a dependency of Gatsby

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    // const siteTitle = get(this.props, "data.site.siteMetadata.title")

    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug }}) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;
