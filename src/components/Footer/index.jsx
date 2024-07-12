import React from 'react';
import StyledFooter from './styled';
import Flex from '../Wrappers/Flex';
import TextBox from '../Wrappers/Text';
import Modsen from '../../assets/logo_modsen.svg'
import Logo from '../../assets/Logo_dark.svg'

const Footer = () => {
  return (
    <StyledFooter>
      <Flex direction="column" justify="space-between" padding="5vh 0">
        <Flex gap="10vw">
          <div>
            <TextBox>Logo Financial Group LLC</TextBox>
            <TextBox>2024 News. All rights reserved</TextBox>
          </div>
          <div>
            <TextBox weight="700">Phone: </TextBox>
            <TextBox>(406) 555-0120</TextBox>
          </div>
        </Flex>
        <Flex justify="space-between" align="center">
          <Flex gap="9vw">
            <div>
              <TextBox>2972 Westheimer Rd. Santa Ana,</TextBox>
              <TextBox>Illinois 85486</TextBox>
            </div>
            <div>
              <TextBox weight="700">Email:</TextBox>
              <TextBox>news@gmail.com</TextBox>
            </div>
          </Flex>
          <Flex gap="5vw" align="center" justify="flex-end">
            <img src={Modsen} alt='logo1'/>
            <img src={Logo} alt='logo2'/>
          </Flex>
        </Flex>
      </Flex>
    </StyledFooter>
  );
};

export default Footer;
