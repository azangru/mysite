import React from "react"; // a dependency of Gatsby
import graphql from 'graphql'; // a dependency of Gatsby
import styled from 'styled-components';

import PageContainer from '../containers/page-container';
import Title from '../components/page-title';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    // const siteTitle = get(this.props, "data.site.siteMetadata.title")

    return (
      <PageContainer>
        { this.renderTitle(post.frontmatter.title) }
        { this.renderDate(post.frontmatter.date) }
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </PageContainer>
    );
  }

  renderTitle(title) {
    return <Title>{title}</Title>;
  }

  renderDate(date) {
    const DateElement = styled.p`
      font-style: italic;
      font-size: 2.3rem;
    `;
    return <DateElement>{date}</DateElement>;
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
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`;
