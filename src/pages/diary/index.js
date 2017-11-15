import React from "react"; // a dependency of Gatsby
import graphql from 'graphql'; // a dependency of Gatsby
// import styled from 'styled-components';
import Link from "gatsby-link";

import PageContainer from '../../containers/page-container';

export default class DiaryIndexPage extends React.Component {

  render() {
    const { data: { allMarkdownRemark: { edges } } } = this.props;

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
  query DiaryPostQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000,
      filter: { fields: { slug: { regex: "/^\/diary/" } } },
      sort: {fields: [frontmatter___title], order: DESC}
    ) {
      edges {
        node {
          frontmatter {
            title
          },
          fields {
            slug
          }
        }
      }
    }
  }
`;