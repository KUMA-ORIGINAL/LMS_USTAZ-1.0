import { useState } from 'react';
import ScoreTable from './components/ScoreTable';

const MentorStudentsRating = () => {
  const initialData = {
    lessons: [
      'Тема 1', 'Тема 2', 'Тема 3', 'Тема 4', 'Тема 5',
      'Тема 6', 'Тема 7', 'Тема 8', 'Тема 9', 'Тема 10',
      'Тема 11', 'Тема 12', 'Тема 13', 'Тема 14', 'Тема 15',
    ],
    students: [
      { id: 1, name: 'Иванов Иван',        scores: [3, 7, 4, 8, 2, 6, 9, 5, 1, 10, 3, 7, 10, 3, 0] },
      { id: 2, name: 'Петров Петр',        scores: [7, 8, 5, 9, 1, 4, 6, 3, 2, 10, 7, 8, 10, 3, 0] },
      { id: 3, name: 'Сидоров Алексей',    scores: [5, 9, 6, 8, 2, 4, 7, 3, 1, 10, 8, 7, 10, 3, 0] },
      { id: 4, name: 'Козлов Николай',     scores: [2, 6, 9, 7, 3, 5, 8, 1, 4, 10, 6, 9, 10, 3, 0] },
      { id: 5, name: 'Морозов Олег',        scores: [9, 5, 4, 7, 1, 6, 10, 8, 3, 2, 9, 4, 10, 3,0] },
      { id: 6, name: 'Васильев Дмитрий',    scores: [6, 8, 3, 9, 2, 7, 4, 1, 5, 10, 8, 7, 10, 3, 0] },
      { id: 7, name: 'Павлов Андрей',       scores: [1, 7, 3, 9, 5, 8, 2, 6, 4, 10, 7, 5, 10, 3, 0] },
      { id: 8, name: 'Федоров Артем',       scores: [8, 4, 2, 7, 9, 3, 5, 1, 6, 10, 7, 4, 10, 3, 0] },
    ],
  };

  const [data, setData] = useState(initialData);


  const handleScoreChange = (studentId, lessonIndex, newScore) => {
    const newData = { ...data };
    newData.students = data.students.map((student) => {
      if (student.id === studentId) {
        const newScores = [...student.scores];
        newScores[lessonIndex] = parseInt(newScore, 10); 
        return { ...student, scores: newScores };
      }
      return student;
    });
    setData(newData);
  };

  
  return (
    <div className="content">
      <h2 style={{marginBottom:"20px"}}>Рейтинг студентов:</h2>
      <ScoreTable  data={data} onScoreChange={handleScoreChange}/>
    </div>
  );
};

export default MentorStudentsRating;

