import React, { useContext } from 'react';
import {StyledArticle, StyledLink} from './styled';
import TextBox from '../Wrappers/Text';
import Flex from '../Wrappers/Flex';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import nophoto from '../../assets/article_noimg.webp'
import Loader from '../Loader';
import { useParams } from 'react-router-dom';

const Article = observer(() => {
  const {id} = useParams()
  const {news} = useContext(Context)
  const currTitle = id.split('_').join(' ')
  const article = news.sideBarArticles.find(art => art.title === currTitle);
  news.setCurrentArticle(article)

  if (!article) {
    return (
      <StyledArticle>
        <Loader />
      </StyledArticle>
    ); 
  } 

  const dataConverter = (data) => {
    let result = data.substr(8, 2);
    if (result[0] === '0') {
      result = result[1];
    }
    switch(data.substr(5, 2)) {
    case '01': 
      result += ' Jan';
      break;
    case '02': 
      result += ' Feb';
      break;
    case '03': 
      result += ' Mar';
      break;
    case '04': 
      result += ' Apr';
      break;
    case '05': 
      result += ' May';
      break;
    case '06': 
      result += ' Jun';
      break;
    case '07': 
      result += ' Jul';
      break;
    case '08': 
      result += ' Aug';
      break;
    case '09': 
      result += ' Sep';
      break;
    case '10': 
      result += ' Oct';
      break;
    case '11': 
      result += ' Nov';
      break;
    case '12': 
      result += ' Dec';
      break;
    default:
    }
    result += ' ' + data.substr(0, 4) + ', ';
    let time = data.substr(11, 5);
    if (parseInt(time.substr(0, 2)) < 12) {
      if (time[0] === '0') {
        time = time.substr(1)
      }
      result += time + 'am'
    } else {
      time = parseInt(time.substr(0, 2)) % 12 + time.substr(2)
      result += time + 'pm'
    }
    return result
  }

  return (
    <StyledArticle>
      <TextBox color='rgba(57, 57, 57, 1)' weight='400'>{'News > Financial Post'}</TextBox>
      <TextBox size='30px' color='rgba(44, 49, 68, 1)' weight='700'>{article.title}</TextBox>
      <Flex direction='column' gap='10px'>
        <TextBox size='14px' color='rgba(137, 137, 137, 1)'>{dataConverter(article.publishedAt)}</TextBox>
        <TextBox color='rgba(44, 49, 68, 1)'>{'by ' + article.source.name}</TextBox>
      </Flex>
      <img src={article.urlToImage || nophoto} width='100%' alt='article'/>
      <TextBox>{article.content.replace(/\s*\[\+\s*\d+\s*chars\]$/, '')}</TextBox>
      <StyledLink href={article.url}>Link to the origin</StyledLink>
    </StyledArticle>
  );
});

export default Article;
