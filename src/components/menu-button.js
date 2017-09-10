import React from 'react'; // a dependency of Gatsby
import styled, { keyframes } from 'styled-components';

const verticalWobble = keyframes`
  16.65% {
    -webkit-transform: translateY(8px);
    transform: translateY(3px);
  }

  33.3% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-2px);
  }

  49.95% {
    -webkit-transform: translateY(4px);
    transform: translateY(2px);
  }

  66.6% {
    -webkit-transform: translateY(-2px);
    transform: translateY(-1px);
  }

  83.25% {
    -webkit-transform: translateY(1px);
    transform: translateY(1px);
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

const HamburgerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  left: 90px;
  width: 40px;
  height: 40px;
  border 1px solid black;
  border-radius: 50%;
  box-shadow: 1px 2px 1px #888888;
  cursor: pointer;
  user-select: none;

  &:hover {
    animation: ${verticalWobble} 1s ease-in-out
  }
`;

const Hamburger = styled.svg`
  height: 20px;
  width: 28px;
`;

export default function MenuButton(props) {

  return (
    <HamburgerButton
      onClick={props.openMenu}
    >
      <Hamburger
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 28 20"
        version="1.1"
      >
        <g>
          <rect ry="2" height="4" width="28" y="0" x="0"/>
          <rect ry="2" height="4" width="28" y="8" x="0"/>
          <rect ry="2" height="4" width="28" y="16" x="0"/>
        </g>
      </Hamburger>
    </HamburgerButton>
  );

}
