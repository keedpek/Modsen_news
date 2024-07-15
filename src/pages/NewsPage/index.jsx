import React, {useContext, useEffect} from 'react';
import Flex from '../../components/Wrappers/Flex'
import SideBar from '../../components/SideBar';
import Article from '../../components/Article';
import { fetchNews } from '../../utils/http/newsAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';

const NewsPage = observer(() => {
  const {news} = useContext(Context)
  useEffect(() => {
    const fetch9News = async () => {
      const responses = await Promise.all([1, 2, 3].map(page => fetchNews('en', page)));
      const articles = responses.flatMap(res => res.data);
      news.setArticles(articles);
      news.setSideBarArticles(news.articles.slice(0, 9));
      news.setCurrentArticle(news.articles[0]);
    }
  
    fetch9News()
  }, [])

  return (
    <Flex padding='2% 7%' justify="space-between">
      <Article/>
      <SideBar/>
    </Flex>
  );
});

export default NewsPage;
