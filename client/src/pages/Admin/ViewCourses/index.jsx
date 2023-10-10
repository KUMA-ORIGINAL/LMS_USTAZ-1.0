import React, { useState } from 'react';
import Card from './Card'
import { Box } from '@mui/material';

const ViewCourses = () => {
  const courses = [
    {
      id: 1,
      name: 'Основы JavaScript',
      duration: '4 недели',
      mentor: 'Иван Иванов',
      students: 50,
      status: 'В процессе',
      price: '$50',
    },
    {
      id: 2,
      name: 'Разработка веб-приложений с React',
      duration: '6 недель',
      mentor: 'Мария Петрова',
      students: 35,
      status: 'В процессе',
      price: '$70',
    },
    {
      id: 3,
      name: 'Базы данных и SQL',
      duration: '5 недель',
      mentor: 'Алексей Смирнов',
      students: 25,
      status: 'Окончен',
      price: '$60',
    },
    {
      id: 4,
      name: 'Мобильная разработка с React Native',
      duration: '8 недель',
      mentor: 'Елена Ковалева',
      students: 42,
      status: 'В процессе',
      price: '$80',
    },
  ];
  
  
  return (
    <Box display='flex' flexWrap="wrap" columnGap='40px'>
      {courses.map((data) => <Card course={data}/>)}
    </Box>
  )
}

export default ViewCourses