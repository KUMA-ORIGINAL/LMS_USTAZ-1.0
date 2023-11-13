import { useState } from 'react';

//import components
import ScoreTable from './components/ScoreTable';


const MentorStudentsRating = () => {

  //testing data
  const initialData = {
    lessons: [
      'Тема 1', 'Тема 2', 'Тема 3', 'Тема 4', 'Тема 5',
      'Тема 6', 'Тема 7', 'Тема 8', 'Тема 9', 'Тема 10',
      'Тема 11', 'Тема 12', 'Тема 13', 'Тема 14', 'Тема 15',
    ],
    students: [
      { id: 1, name: 'Студент 1', scores: [90, 85, 78, 92, 88, 94, 76, 82, 90, 85, 89, 91, 87, 93, 85] },
      { id: 2, name: 'Студент 2', scores: [88, 76, 82, 90, 85, 89, 91, 87, 93, 85, 90, 85, 78, 92, 94] },
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
      <ScoreTable  data={data} onScoreChange={handleScoreChange}/>
    </div>
  );
};

export default MentorStudentsRating;

