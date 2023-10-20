import React, { useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  TablePagination,
} from '@mui/material';


const students = [
  { id: 1, name: 'Студент 1', score: 85 },
  { id: 2, name: 'Студент 2', score: 92 },
  { id: 3, name: 'Студент 3', score: 78 },

];


const StudentRating = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortedStudents = filteredStudents
    .map(student => ({ ...student }))
    .sort((a, b) => b.score - a.score);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper style={{margin:"20px 50px", width:"100%"}}>
      <Typography variant="h5" style={{ padding: '16px' }}>
        Рейтинг студентов
      </Typography>
      <TextField
        label="Поиск по имени"
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ margin: '16px' }}
      />
      <TableContainer style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Место</TableCell>
              <TableCell>Имя студента</TableCell>
              <TableCell>Баллы</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedStudents
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((student, index) => (
                <TableRow key={student.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.score}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={sortedStudents.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default StudentRating;
