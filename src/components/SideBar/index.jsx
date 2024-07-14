import React, { useContext, useState } from 'react';
import { StyledSideBar, StyledNewsContainer } from './styled';
import NewsLink from '../NewsLink';
import TextBox from '../Wrappers/Text'
import Button from '../Buttons/Button';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import Loader from '../Loader';
import HamburgerMenu from '../Buttons/Hamburger';
import Flex from '../Wrappers/Flex';
import CloseButton from '../Buttons/CloseButton';

const SideBar = observer(() => {
  const {news} = useContext(Context)
  const [page, setPage] = useState(1)
  const [isOpened, setIsOpened] = useState(false)
  const sideBarArticles = news.sideBarArticles.filter(article => article.id !== news.currentArticle.id)

  if (sideBarArticles.length === 0) {
    return (
      <StyledSideBar>
        <TextBox size='30px' weight='700'>More News</TextBox>
        <Loader/>  
      </StyledSideBar>
    );
  }

  return (
    <>
      <HamburgerMenu setIsOpened={setIsOpened}/>
      <StyledSideBar isOpened={isOpened}>
        <Flex justify='space-between' align='center'>
          <TextBox size='30px' mSize='24px' sSize='20px' weight='700'>More News</TextBox>
          <CloseButton setIsOpened={setIsOpened}/>
        </Flex>
        <StyledNewsContainer>
          {sideBarArticles.map((article, index) => 
            <NewsLink key={index} article={article}></NewsLink>
          )}
        </StyledNewsContainer>
        <Button 
          color='rgba(241, 121, 0, 1)' 
          width='33%' 
          padding='10px' 
          align='flex-end' 
          mSize='13px' 
          Size='10px' 
          onClick={() => {
            news.setSideBarArticles([...news.sideBarArticles, ...news.articles.slice(8 * page + 1, 8 * page + 9)]);
            setPage(prev => prev + 1);
          }}>
          Read more
        </Button>
      </StyledSideBar>
    </>
  );
});

export default SideBar;
