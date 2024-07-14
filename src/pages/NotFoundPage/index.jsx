import React from 'react';
import Flex from '../../components/Wrappers/Flex';
import TextBox from '../../components/Wrappers/Text';

const NotFoundPage = () => {
  return (
    <Flex direction="column" justify="center" align="center" margin="12vh 0" gap="3vh">
      <TextBox size="192px" color="rgba(241, 121, 0, 1)" weight="500" mobSize='120px'>404</TextBox>
      <TextBox size="16px" weight="500" mobSize='12px'>OOPS! Page you're looking for doesn't exist. Please use search for help</TextBox>
    </Flex>
  );
};

export default NotFoundPage;
