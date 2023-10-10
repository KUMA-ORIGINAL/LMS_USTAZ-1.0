import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from '@mui/material';

const CourseCard = ({ course }) => {
  const { name, duration, mentor, students, status, price } = course;

  return (
    <Card sx={{width:"300px", maxHeight:"250px", borderRadius:"10px"}}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography color="text.secondary">
          <strong>Длительность:</strong> {duration}
        </Typography>
        <Typography color="text.secondary">
          <strong>Ментор:</strong> {mentor}
        </Typography>
        <Typography color="text.secondary">
          <strong>Количество студентов:</strong> {students}
        </Typography>
        <Typography color="text.secondary">
          <strong>Статус:</strong> {status}
        </Typography>
        <Typography color="text.secondary">
          <strong>Стоимость:</strong> {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Редактировать
        </Button>
        <Button size="small" color="secondary">
          Удалить
        </Button>
      </CardActions>
    </Card>
  );
};

export default CourseCard;
