import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useGetCourseByIdQuery } from '../../http/course.api';

const CourseCard = () => {

  
  const { data: course, error, isLoading } = useGetCourseByIdQuery(3);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


    
    return (
      <Card>
      <Image src={course?.photo || ""} />
      <Content>
        <Title>{course?.name || ""}</Title>
        <Description>{course?.description || ""}</Description>
        <Details>
        <p>Ментор: Максат Каныбеков</p>

          <p>Длительность: {course?.duration || ""} месяцев</p>
        </Details>
      </Content>
    </Card>
  );
};

export default CourseCard;

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  margin: 16px;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 16px;
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin: 0;
`;

const Description = styled.p`
  margin: 8px 0;
`;

const Details = styled.div`
  font-size: 0.9rem;
`;
