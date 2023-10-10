import {useState} from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useTheme } from '@mui/material';

const SalesFunnel = () => {
  const theme = useTheme()
  const  [userData, setUserData] = useState({
    labels: [
      'Холодный контакт',
      'Прогрев',
      'Участие в мероприятии',
      'Интерес',
      'Питчинг',
      'Оплата',
    ],
    datasets: [
      {
        label: 'Количество клиентов',
        data: [1000, 800, 600, 400, 300, 200],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 205, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  })
   const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
        backgroundColor: theme.palette.mode === "dark" ? "white" : 'black', 
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Курсы Front-End',
        color: theme.palette.mode === "dark" ? "white" : 'black', 
      },
    },
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
  return (
    <div style={{width:"800px", margin:"0 auto"}}>

      <h2>Sales Funnel - Воронка продаж</h2>
      <Bar
        data={userData}
        options={options}
      />
    </div>
  )
}

export default SalesFunnel