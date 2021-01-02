import React, { Component } from 'react';
import { Link } from "gatsby";
import styled from 'styled-components';

import Layout from '../components/layout';


export default class MainPage extends Component {
  get title() {
    const Title = styled.h1`
      text-align: center;
      color: #606060;
      font: 7em 'PT Serif', serif;
    `;

    return <Title>Andrey Azov</Title>;
  }

  get subheader() {
    const Subheader = styled.h2`
      text-align: center;
      color: #606060;
      font: 4em 'PT Serif', serif;
    `;

    return <Subheader>personal site</Subheader>;
  }

  get menu() {
    const Menu = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;

      @media screen and (max-width: 767px) {
        flex-direction: column;
        align-items: center;
      }
    `;

    const MenuItem = styled.span`
      font-size: 2.5rem;
      margin-bottom: 1rem;
    `;

    return (
      <Menu>
        <MenuItem>
          <Link to='/about/'>about me</Link>
        </MenuItem>
        <MenuItem>
          <Link to='/blog/'>blog</Link>
        </MenuItem>
        <MenuItem>
          <Link to='/diary/'>diary</Link>
        </MenuItem>
      </Menu>
    );
  }

  render() {
    return (
      <Layout>
        { this.title }
        { this.subheader }
        { this.menu }
      </Layout>
    );
  }

}
