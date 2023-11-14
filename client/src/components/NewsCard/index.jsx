import React from 'react';
import styled from 'styled-components';



const NewsCard = ({ title, description, date, imageUrl }) => {
  return (
    <CardContainer>
      <CardImage src={imageUrl} alt="News" />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardDate>{date}</CardDate>
      </CardContent>
    </CardContainer>
  );
};

export default NewsCard;


const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 310px;
`;

const CardImage = styled.img`
  max-width: 100%;
  max-height:200px;
  object-fit:cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h2`
  font-size: 1rem;
  margin: 0;
`;

const CardDescription = styled.p`
  font-size: 0.7rem;
  margin: 10px 0;
`;

const CardDate = styled.p`
  font-size: 0.8rem;
  color: #888;
`;