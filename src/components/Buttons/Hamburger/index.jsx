import React from 'react';
import {StyledHamburger, StyledLine} from './styled';

const HamburgerMenu = ({setIsOpened}) => {
  const clickHandler = () => {
    setIsOpened(prev => !prev)
  }

  return (
    <StyledHamburger onClick={clickHandler}>
      <StyledLine/>
      <StyledLine/>
      <StyledLine/>
    </StyledHamburger>
  );
};

export default HamburgerMenu;
