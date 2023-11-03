import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Button,
} from '@mui/material';

const MentorVisits = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Иван', attendance: [] },
    { id: 2, name: 'Тима', attendance: [] },
    { id: 3, name: 'Адахан', attendance: [] },
    { id: 4, name: 'Мария', attendance: [] },
    { id: 5, name: 'Анна', attendance: [] },
    { id: 6, name: 'Алексей', attendance: [] },
    { id: 7, name: 'Екатерина', attendance: [] },
    { id: 8, name: 'Дмитрий', attendance: [] },
    { id: 9, name: 'Надежда', attendance: [] },
    { id: 10, name: 'Сергей', attendance: [] },
    { id: 11, name: 'Ольга', attendance: [] },
    { id: 12, name: 'Павел', attendance: [] },
    { id: 13, name: 'Евгения', attendance: [] },
    { id: 14, name: 'Александр', attendance: [] },
    { id: 15, name: 'Людмила', attendance: [] },
  ]);
  
  const [lessons, setLessons] = useState([
    { id: 1, date: '03.11' },
    { id: 2, date: '05.11' },
    { id: 3, date: '07.11' },
    { id: 4, date: '10.11' },
    { id: 5, date: '12.11' },
    { id: 6, date: '14.11' },
    { id: 7, date: '17.11' },
    { id: 8, date: '19.11' },
    { id: 9, date: '21.11' },
    { id: 10, date: '24.11' },
    { id: 11, date: '26.11' },
    { id: 12, date: '28.11' },
    { id: 13, date: '01.12' },
    { id: 14, date: '03.12' },
    { id: 15, date: '05.12' },
  ]);
  
  const [visibleLessons, setVisibleLessons] = useState(12); // Начальное количество видимых уроков

  const handleAttendanceChange = (studentId, lessonId) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) => {
        if (student.id === studentId) {
          const updatedAttendance = student.attendance.includes(lessonId)
            ? student.attendance.filter((id) => id !== lessonId)
            : [...student.attendance, lessonId];
          return { ...student, attendance: updatedAttendance };
        }
        return student;
      })
    );
  };

  const handleShowMoreLessons = () => {
    setVisibleLessons((prevVisibleLessons) => prevVisibleLessons + 12);
  };

  return (
    <div style={{ maxWidth: "900px", margin: "20px 50px", overflowX: "auto" }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Имя студента</TableCell>
              {lessons.slice(0, visibleLessons).map((lesson) => (
                <TableCell key={lesson.id}>{lesson.date}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={student.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{student.name}</TableCell>
                {lessons.slice(0, visibleLessons).map((lesson) => (
                  <TableCell key={lesson.id}>
                    <Checkbox
                      checked={student.attendance.includes(lesson.id)}
                      onChange={() => handleAttendanceChange(student.id, lesson.id)}
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {visibleLessons < lessons.length && (
        <Button variant="contained" onClick={handleShowMoreLessons}>
          Дальше
        </Button>
      )}
    </div>
  );
};

export default MentorVisits;
