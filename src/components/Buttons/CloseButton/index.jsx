import React from 'react';
import StyledCloseButton from './styled';
import closebtn from '../../../assets/close_btn.svg'

const CloseButton = ({setIsOpened}) => {
  const clickHandler = () => {
    setIsOpened(false);
  }

  return (
    <StyledCloseButton onClick={clickHandler}>
      <img src={closebtn} alt='' />
    </StyledCloseButton>
  );
};

export default CloseButton;
