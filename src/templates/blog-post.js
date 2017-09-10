import React from "react"; // a dependency of Gatsby
import graphql from 'graphql'; // a dependency of Gatsby

import PageContainer from '../containers/page-container';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    // const siteTitle = get(this.props, "data.site.siteMetadata.title")

    return (
      <PageContainer>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </PageContainer>
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
