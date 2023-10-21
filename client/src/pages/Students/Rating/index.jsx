import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper, Typography, TableContainer } from '@mui/material';

const studentData = [
  { name: 'John Doe', rating: 90 },
  { name: 'Jane Smith', rating: 85 },
  { name: 'Alice Johnson', rating: 92 },
  { name: 'John Doe', rating: 90 },
  { name: 'Jane Smith', rating: 85 },
  { name: 'Alice Johnson', rating: 92 },
  { name: 'John Doe', rating: 90 },
  { name: 'Jane Smith', rating: 85 },
  { name: 'Alice Johnson', rating: 92 },
  { name: 'John Doe', rating: 90 },
  { name: 'Jane Smith', rating: 85 },
  { name: 'Alice Johnson', rating: 92 },
  { name: 'John Doe', rating: 90 },
  { name: 'Jane Smith', rating: 85 },
  { name: 'Alice Johnson', rating: 92 },

];

const sortedStudentData = studentData.slice().sort((a, b) => b.rating - a.rating);


sortedStudentData.forEach((student, index) => {
  student.place = index + 1;
});

const StudentRating = () => {
  return (
    <TableContainer component={Paper} style={{margin:"20px", background:"transparent"}}>
      <Typography variant="h5" align="center" gutterBottom>
        Рейтинг успеваемости
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Место</TableCell>
            <TableCell>Имя студента</TableCell>
            <TableCell align="right">Рейтинг</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedStudentData.map((student, index) => (
            <TableRow key={index} 
            className={`student-row ${index === 0 ? 'red' : index === 1 ? 'green' : index === 2 ? 'blue' : ''}`}>
              <TableCell>{student.place}</TableCell>
              <TableCell component="th" scope="row">
                {student.name}
              </TableCell>
              <TableCell align="right">{student.rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentRating;
