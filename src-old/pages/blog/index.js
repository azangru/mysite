import React from "react";
import { graphql, Link } from "gatsby";

import PageContainer from '../../containers/page-container';
import Title from '../../components/page-title';

export default class BlogIndexPage extends React.Component {

  render() {
    let { data: { allMarkdownRemark: { edges } } } = this.props;
    edges = edges.filter(({ node }) => node.frontmatter.published); // remove draft entries

    return (
      <PageContainer>
        <Title>Blog</Title>
        {
          edges.map(({ node }, index) =>
            <div key={index}>
              <Link to={node.fields.slug}>
                { node.frontmatter.title }
              </Link>
            </div>
          )
        }
      </PageContainer>
    );
  }

}


export const pageQuery = graphql`
  query BlogPostQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000,
      filter: { fields: { slug: { regex: "/^\/blog/" } } },
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            published
          },
          fields {
            slug
          }
        }
      }
    }
  }
`;
