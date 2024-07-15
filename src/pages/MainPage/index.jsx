import React, {useContext, useEffect} from 'react';
import Flex from '../../components/Wrappers/Flex'
import SideBar from '../../components/SideBar';
import { fetchNews } from '../../utils/http/newsAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import MainPageContent from '../../components/MainPageContent';

const MainPage = observer(() => {
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
      <MainPageContent />
      <SideBar/>
    </Flex>
  );
});

export default MainPage;
