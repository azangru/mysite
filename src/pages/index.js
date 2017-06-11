import React from 'react';
import Link from "gatsby-link";
import styled from 'styled-components';

const Test = styled.div`
  color: yellow;

  span {
    color: green;
  }
`;

export default () => (
  <Test>
    Hello
    <Link to="/about/">gatsby</Link>!
  </Test>
);
