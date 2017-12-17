import React from "react"; // a dependency of Gatsby
import graphql from 'graphql'; // a dependency of Gatsby
import styled from 'styled-components';
import Link from "gatsby-link";

import PageContainer from '../../containers/page-container';

export default class BlogIndexPage extends React.Component {

  render() {
    let { data: { allMarkdownRemark: { edges } } } = this.props;
    edges = edges.filter(({ node }) => !node.frontmatter.draft); // remove draft entries

    return (
      <PageContainer>
        {
          edges.map(({ node }, index) =>
            <div key={index}>
              <Link
                to={node.fields.slug}
              >
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
            draft
          },
          fields {
            slug
          }
        }
      }
    }
  }
`;
