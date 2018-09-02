import React, { Component } from "react";
import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';

const openingAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0%);
  }
`;

const closingAnimation = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
`;

const SideMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  display: flex;
  background: #262626;
  transform: translateX(-100%);
  z-index: 5;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const SideMenuContainerOpening = SideMenuContainer.extend`
  transform: translateX(0);
  animation: ${openingAnimation} 0.5s ease-in-out
`;

const SideMenuContainerClosing = SideMenuContainer.extend`
  animation: ${closingAnimation} 0.5s ease-in-out
`;

export default class SideMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpening: false,
      isClosing: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.isOpening(this.props, nextProps)) {
      this.setState({
        isOpening: true,
        isClosing: false
      });
    } else if (this.isClosing(this.props, nextProps)) {
      this.setState({
        isOpening: false,
        isClosing: true
      });
    } else {
      if (this.state.isOpening || this.state.isClosing) {
        this.setState({
          isOpening: false,
          isClosing: false
        });
      }
    }
  }

  isOpening(currentProps, nextProps) {
    return !currentProps.isOpen && nextProps.isOpen;
  }

  isClosing(currentProps, nextProps) {
    return currentProps.isOpen && !nextProps.isOpen;
  }

  getContainer() {
    if (this.state.isOpening) {
      return SideMenuContainerOpening;
    } else if (this.state.isClosing) {
      return SideMenuContainerClosing;
    } else {
      return SideMenuContainer;
    }
  }

  render() {
    const Container = this.getContainer();

    return (
      <Container>
        { this.renderCloseButton() }
        { this.renderMenuItems() }
      </Container>
    );
  }

  renderMenuItems() {
    const MenuItemsContainer = styled.ul`
      position: absolute;
      top: 50vh;
      left: 50%;
      list-style: none;
      padding: 0;
      transform: translateX(-90%) translateY(-90%);
    `;

    const MenuItem = styled.li`
      color: white;
      font-size: 30px;
      margin-bottom: 1.6rem;

      a {
        color: white;
      }
    `;

    return (
      <MenuItemsContainer>
        <MenuItem>
          <Link to='/about/' activeStyle={{ color: '#b88b58' }} exact={false} >
            about
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to='/blog/' activeStyle={{ color: '#b88b58' }} exact={false} >
            blog
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to='/diary/' activeStyle={{ color: '#b88b58' }} exact={false} >
            diary
          </Link>
        </MenuItem>
      </MenuItemsContainer>
    );
  }

  renderCloseButton() {
    const CloseButton = styled.div`
      position: absolute;
      right: 20px;
      top: 20px;
      cursor: pointer;
    `;

    return (
      <CloseButton onClick={() => this.props.close()}>
        { this.renderCloseIcon() }
      </CloseButton>
    );
  }

  renderCloseIcon() {
    const CloseIcon = styled.svg`
      width: 20px;
      height: 20px;
      fill: white;
    `;


    return (
      <CloseIcon viewBox="0 0 24 24">
        <path d="M13.4 12l9.3-9.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L12 10.6 2.7 1.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l9.3 9.3-9.3 9.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3l9.3-9.3 9.3 9.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L13.4 12z"/>
      </CloseIcon>
    );
  }

}
