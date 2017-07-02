import React, { Component } from "react"; // a dependency of Gatsby
import styled from 'styled-components';

import MenuButton from '../components/menu-button';

export default class PageContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  render() {
    const MainContainer = this.renderMainContainer();

    return (
      <div>
        <MenuButton />
        <MainContainer>
          { this.props.children }
        </MainContainer>
      </div>
    );
  }

  renderMainContainer() {
    return styled.main`
      max-width: 960px;
      margin: auto;
      font-size: 2rem;
    `;
  }

  renderMenu() {

  }

  renderMenuButton() {

  }
}
