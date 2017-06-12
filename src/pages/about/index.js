import React from "react"; // a dependency of Gatsby
import graphql from 'graphql'; // a dependency of Gatsby

import myPhoto from './azov.png';

export default class About extends React.Component {
  render() {
    let content = this.props.data.markdownRemark.html;
    return (
      <div>
        <img src={myPhoto} alt="My photo" />
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    );
  }
}

// I have hardcoded the path to the markdown file in the graphQL query
export const pageQuery = graphql`
  query AboutData {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: "/about/" }}) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;
