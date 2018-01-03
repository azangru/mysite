import React, { Component } from "react"; // a dependency of Gatsby
import styled from 'styled-components';

import MenuButton from '../components/menu-button';
import SideMenu from '../components/side-menu';

export default class PageContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu() {
    if (!this.state.menuOpen) {
      this.setState({ menuOpen: true });
    }
  }

  closeMenu() {
    if (this.state.menuOpen) {
      this.setState({ menuOpen: false });
    }
  }

  render() {
    const MainContainer = this.renderMainContainer();

    return (
      <div>
        <MenuButton openMenu={this.openMenu} />
        { this.renderMenu() }
        <MainContainer>
          { this.props.children }
        </MainContainer>
      </div>
    );
  }

  renderMainContainer() {
    return styled.main`
      max-width: 960px;
      margin: 20px auto;
      padding: 0 2rem 4rem;
      font-size: 2rem;

      @media screen and (max-width: 1000px) {
        margin-top: 90px;
      }

      img {
        max-width: 100%;
      }
    `;
  }

  renderMenu() {
    return <SideMenu isOpen={this.state.menuOpen} close={this.closeMenu} />;
  }

  renderMenuButton() {

  }
}
