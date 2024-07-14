import React, { useContext } from 'react';
import StyledNewsLink from './styled';
import Flex from '../Wrappers/Flex';
import TextBox from '../Wrappers/Text';
import { Context } from '../..';
import noimage from '../../assets/noimage.jpg'

const NewsLink = ({article}) => {
  const {news} = useContext(Context);

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
    result += ' ' + data.substr(0, 4);
    return result;
  }

  const shortDescription = (description) => {
    let result = ''
    let words = description.split(' ');
    while (result.length < 100) {
      result += words.shift() + ' '
    }
    if (result !== description) {
      result = result.slice(0, -1)
      result += '...'
    }
    return result;
  }

  return (
    <StyledNewsLink onClick={() => {
      news.setCurrentArticle(article)
    }}>
      <img src={article.urlToImage || noimage} width='30%' height='100%' alt=''/>
      <Flex direction='column' justify='space-between'>
        <TextBox size='16px' mSize='14px' sSize='12px' weight='700' color='rgba(44, 49, 68, 1)'>{article.title}</TextBox>
        <TextBox size='13px' mSize='11px' sSize='9px' color='rgba(57, 57, 57, 1)'>{article.description ? shortDescription(article.description) : 'cannot get description'}</TextBox>
        <Flex>
          <TextBox size='13px' mSize='11px' sSize='9px' color='rgba(44, 49, 68, 1)'>{(article.author || 'unknown author') + ' -'}</TextBox>
          <TextBox size='13px' mSize='11px' sSize='9px' color='rgba(137, 137, 137, 1)'>{dataConverter(article.publishedAt)}</TextBox>
        </Flex>
      </Flex>
      
    </StyledNewsLink>
  );
};

export default NewsLink;
