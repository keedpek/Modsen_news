import React from 'react';
import StyledMainPageText from './styled';
import TextBox from '../Wrappers/Text';
import img from '../../assets/main_page_img.webp'

const MainPageContent = () => {
  return (
    <StyledMainPageText>
      <TextBox weight='700' color='rgba(44, 49, 68, 1)' size='30px' sSize='25px'>Pick an article</TextBox>
      <img src={img} width='50%' alt='Welcome)'/>
    </StyledMainPageText>
  );
};

export default MainPageContent;
