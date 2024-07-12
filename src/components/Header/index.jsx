import React from 'react';
import logo from '../../assets/Logo.svg'
import StyledHeader from './styled';
import Flex from '../Wrappers/Flex';
import TextBox from '../Wrappers/Text';

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt='' />
      <Flex justify="flex-end" gap="2vw">
        <TextBox color="rgba(255, 179, 102, 1)">News</TextBox>
        <TextBox color="white">News</TextBox>
        <TextBox color="white">News</TextBox>
        <TextBox color="white">News</TextBox>
        <TextBox color="white">News</TextBox>
        <TextBox color="white">Contact Us</TextBox>
      </Flex>
    </StyledHeader>
    
  );
};

export default Header;
