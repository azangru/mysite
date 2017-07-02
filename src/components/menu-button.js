import React from 'react'; // a dependency of Gatsby
import styled from 'styled-components';

export default function MenuButton(props) {
  console.log('menu button props', props);

  const Hamburger = styled.svg`
    height: 20px;
    width: 28px;

    &:hover {
      fill: red;
    }
  `;

  return (
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
  );

}
