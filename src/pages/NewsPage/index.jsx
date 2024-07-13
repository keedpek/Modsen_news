import React, {useContext, useEffect} from 'react';
import Flex from '../../components/Wrappers/Flex'
import SideBar from '../../components/SIdeBar';
import Article from '../../components/Article';
import { fetchNews } from '../../utils/http/newsAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import { v4 } from 'uuid';

const NewsPage = observer(() => {
  const {news} = useContext(Context)
  useEffect(() => {
    fetchNews().then(data => {
      const articlesWithID = data.articles.map(article =>({
        ...article,
        id: v4()
      }))
      news.setArticles(articlesWithID);
      news.setCurrentArticle(articlesWithID[0]);
      news.setSideBarArticles(articlesWithID.slice(0, 8));
    })
  }, [])

  return (
    <Flex padding='2% 7%' justify="space-between">
      <Article/>
      <SideBar/>
    </Flex>
  );
});

export default NewsPage;
