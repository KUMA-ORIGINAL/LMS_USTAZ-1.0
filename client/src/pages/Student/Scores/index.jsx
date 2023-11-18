import React, {useState} from 'react'
import ScoreTable from '../../Mentor/StudentsRating/components/ScoreTable'
import { Line } from "react-chartjs-2"
import { Chart as ChartJs } from "chart.js/auto"
import { useTheme } from '@mui/material';

const StudentScores = () => {
  //testing data
  const initialData = {
    lessons: [
      'Тема 1',
      'Тема 2',
      'Тема 3',
      'Тема 4',
      'Тема 5',
      'Тема 6',
      'Тема 7',
      'Тема 8',
      'Тема 9',
      'Тема 10',
      'Тема 11',
      'Тема 12',
      'Тема 13',
      'Тема 14',
      'Тема 15',
    ],
    students: [
      {
        id: 1,
        name: 'Иванов Иван',
        scores: [3, 7, 4, 8, 2, 6, 9, 5, 1, 10, 3, 7, 10, 3, 7],
      },
      {
        id: 2,
        name: 'Петров Петр',
        scores: [7, 8, 5, 9, 1, 4, 6, 3, 2, 10, 7, 8, 10, 3, 7],
      },
      {
        id: 3,
        name: 'Сидоров Алексей',
        scores: [5, 9, 6, 8, 2, 4, 7, 3, 1, 10, 8, 7, 10, 3, 7],
      },
      {
        id: 4,
        name: 'Козлов Николай',
        scores: [2, 6, 9, 7, 3, 5, 8, 1, 4, 10, 6, 9, 10, 3, 7],
      },
      {
        id: 5,
        name: 'Морозов Олег',
        scores: [9, 5, 4, 7, 1, 6, 10, 8, 3, 2, 9, 4, 10, 3, 7],
      },
      {
        id: 6,
        name: 'Васильев Дмитрий',
        scores: [6, 8, 3, 9, 2, 7, 4, 1, 5, 10, 8, 7, 10, 3, 7],
      },
      {
        id: 7,
        name: 'Павлов Андрей',
        scores: [1, 7, 3, 9, 5, 8, 2, 6, 4, 10, 7, 5, 10, 3, 7],
      },
      {
        id: 8,
        name: 'Федоров Артем',
        scores: [8, 4, 2, 7, 9, 3, 5, 1, 6, 10, 7, 4, 10, 3, 7],
      },
      {
        id: 9,
        name: 'Григорьев Александр',
        scores: [10, 7, 3, 5, 2, 8, 6, 9, 1, 4, 7, 4, 10, 3, 7],
      },
      {
        id: 10,
        name: 'Денисов Сергей',
        scores: [5, 8, 6, 7, 3, 2, 4, 9, 10, 1, 7, 8, 10, 3, 7],
      },
    ],
  }

  const [data, setData] = useState(initialData)

  const handleScoreChange = (studentId, lessonIndex, newScore) => {
    const newData = { ...data }
    newData.students = data.students.map((student) => {
      if (student.id === studentId) {
        const newScores = [...student.scores]
        newScores[lessonIndex] = parseInt(newScore, 10)
        return { ...student, scores: newScores }
      }
      return student
    })
    setData(newData)
  }
  const theme = useTheme();
  const generateRandomData = () => {
    const labels = [
      "1 тема",
      "1 тема",
      "1 тема",
      "1 тема",
      "1 тема",
      "1 тема",
      "1 тема",
    ];

    const data = [];
    for (let i = 0; i < labels.length; i++) {
      const sales = Math.floor(Math.random() * 10);
      data.push(sales);
    }

    return {
      labels: labels,
      datasets: [
        {
          label: 'Баллы',
          data: data,
          borderWidth: 2,
          pointRadius: 4,
        },
      ],
    };
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: theme.palette.mode === "dark" ? "white" : 'black',
        },
      },
      x: {
        ticks: {
          color: theme.palette.mode === "dark" ? "white" : 'black',
        },
      },
    },
  };

  const [getdata, setgetData] = useState(generateRandomData());
  return (
    <div className="content">
      <ScoreTable data={data} onScoreChange={handleScoreChange} />
      <div style={{ width: "950px", margin: "50px auto" }}>
          <Line data={getdata} options={options} />
        </div>
    </div>
  )
}
export default StudentScores
