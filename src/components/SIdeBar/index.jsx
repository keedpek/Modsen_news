import React, { useContext, useState } from 'react';
import { StyledSideBar, StyledNewsContainer } from './styled';
import NewsLink from '../NewsLink';
import TextBox from '../Wrappers/Text'
import Button from '../Button';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';

const SideBar = observer(() => {
  const {news} = useContext(Context)
  const [page, setPage] = useState(1)

  return (
    <StyledSideBar>
      <TextBox size='30px' weight='700'>More News</TextBox>
      <StyledNewsContainer>
        {news.sideBarArticles.map((article, index) => 
          <NewsLink key={index} article={article}></NewsLink>
        )}
      </StyledNewsContainer>
      <Button color='rgba(241, 121, 0, 1)' width='33%' padding='10px' align='flex-end' onClick={() => {
        news.setSideBarArticles([...news.sideBarArticles, ...news.articles.slice(8 * page, 8 * page + 8)]);
        setPage(prev => prev + 1);
        console.log('side' ,news.sideBarArticles);
        console.log('art', news.articles);
      }}>
          Read more
      </Button>
    </StyledSideBar>
  );
});

export default SideBar;
