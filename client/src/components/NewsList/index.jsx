import React from 'react';
import NewsCard from '../NewsCard';
import styled from 'styled-components';

const NewsList = () => {
  const newsData = [
    {
      title: 'Заголовок новости 1',
      description: 'Описание новости 1',
      date: '10 ноября 2023',
      imageUrl: 'https://i.pinimg.com/564x/b3/11/22/b311220b5e0bbd0a45a2be83319987c7.jpg',
    },
    {
      title: 'Заголовок новости 2',
      description: 'Описание новости 2',
      date: '11 ноября 2023',
      imageUrl: 'https://i.pinimg.com/564x/b3/11/22/b311220b5e0bbd0a45a2be83319987c7.jpg',
    },
    {
        title: 'Заголовок новости 2',
        description: 'Описание новости 2',
        date: '11 ноября 2023',
        imageUrl: 'https://i.pinimg.com/564x/b3/11/22/b311220b5e0bbd0a45a2be83319987c7.jpg',
      },
      {
        title: 'Заголовок новости 2',
        description: 'Описание новости 2',
        date: '11 ноября 2023',
        imageUrl: 'https://i.pinimg.com/564x/b3/11/22/b311220b5e0bbd0a45a2be83319987c7.jpg',
      },
  ];


  const visibleNews = newsData.slice(0, 4)

  return (
    <>
    <List>
      {visibleNews.map((news, index) => (
        <NewsCard
          key={index}
          title={news.title}
          description={news.description}
          date={news.date}
          imageUrl={news.imageUrl}
        />
      ))}
    </List>
       <Link href="/all-news">Посмотреть все новости</Link>
       </>
  );
};

export default NewsList;


const List  = styled.div`
    display:flex;

`
const Link = styled.a`
display:block;
     text-align:end;
     color:white;
`