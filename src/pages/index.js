import React, { Component } from 'react';
import Link from "gatsby-link";
import styled from 'styled-components';


export default class MainPage extends Component {
  get title() {
    const Title = styled.h1`
      text-align: center;
      color: #606060;
      font: 7em "noticia text", serif;
    `;

    return <Title>Andrey Azov</Title>;
  }

  get subheader() {
    const Subheader = styled.h2`
      text-align: center;
      color: #606060;
      font: 4em "noticia text", serif;
    `;

    return <Subheader>web developer</Subheader>;
  }

  render() {
    return (
      <div>
        { this.title }
        { this.subheader }
      </div>
    );
  }

}
