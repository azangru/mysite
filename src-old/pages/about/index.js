import React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';

import PageContainer from '../../containers/page-container';

import myPhoto from './azov.png';

export default class About extends React.Component {
  render() {
    let content = this.props.data.markdownRemark.html;

    let MyPhotoContainer = styled.div`
      float: right;
      width: 300px;

      img {
        width: 100%;
        border-radius: 50%;
      }

      @media screen and (max-width: 767px) {
        float: none;
        margin: auto;
        max-width: 100%;
      }
    `;

    return (
      <PageContainer>
        <div>
          <MyPhotoContainer>
            <img src={myPhoto} alt="My photo" />
          </MyPhotoContainer>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </PageContainer>
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
      html
    }
  }
`;
