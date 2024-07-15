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
import { fetchNews } from '../../utils/http/newsAPI';
import { useParams } from 'react-router-dom';

const SideBar = observer(() => {
  const {news} = useContext(Context)
  const [page, setPage] = useState(1)
  const [isOpened, setIsOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const {id} = useParams()
  let sideBarArticles = []
  if (id) {
    sideBarArticles = news.sideBarArticles.filter(article => article.title !== id.split('_').join(' '))
  } else {
    sideBarArticles = news.sideBarArticles
  }

  if (sideBarArticles.length === 0) {
    return (
      <StyledSideBar>
        <TextBox size='30px' weight='700'>More News</TextBox>
        <Loader/>  
      </StyledSideBar>
    );
  }

  const loadMoreArticles = async () => {
    setIsLoading(true);
    const responses = await Promise.all([page * 3 + 2, page * 3 + 3, page * 3 + 4].map(page => fetchNews('en', page)));
    const articles = responses.flatMap(res => res.data);
    news.setArticles([...news.articles, ...articles]);
    news.setSideBarArticles([...news.sideBarArticles, ...news.articles.slice(8 * page + 1, 8 * page + 9)]);
    setPage(prev => prev + 1);
    setIsLoading(false);
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
          {sideBarArticles.map((article, index) => {
            return <NewsLink key={index} article={article}></NewsLink>
          }
          )}
        </StyledNewsContainer>
        {isLoading ? (
          <Loader />
        ) : (
          <Button 
            color='rgba(241, 121, 0, 1)' 
            width='33%' 
            padding='10px' 
            align='flex-end' 
            mSize='13px' 
            Size='10px' 
            onClick={loadMoreArticles}
          >
            Read more
          </Button>
        )}
      </StyledSideBar>
    </>
  );
});

export default SideBar;
