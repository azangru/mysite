import React from "react"; // a dependency of Gatsby
import graphql from 'graphql'; // a dependency of Gatsby
import Link from "gatsby-link";

import PageContainer from '../../containers/page-container';
import Title from '../../components/page-title';

export default class DiaryIndexPage extends React.Component {

  render() {
    const { data: { allMarkdownRemark: { edges } } } = this.props;

    return (
      <PageContainer>
        <Title>Diary</Title>
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
