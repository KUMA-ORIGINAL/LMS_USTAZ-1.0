import {useState} from 'react'
import { Line } from "react-chartjs-2"
import {Chart as ChartJs} from "chart.js/auto"
import { useTheme } from '@mui/material';
import Title from '../Components/Title';

const StatProfit = () => {
  const theme = useTheme();
  const generateRandomData = () => {
    const labels = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ];
  
    const data = [];
    for (let i = 0; i < 12; i++) {
      const sales = Math.floor(Math.random() * 50000) + 200;
      data.push(sales);
    }
  
    return {
      labels: labels,
      datasets: [
        {
          label: 'Доход (в сомах)',
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

  const [data, setData] = useState(generateRandomData());

  return (
    <div className='admin-panel'>
      <Title title="Profit - Прибыль"/> 
      <div style={{width:"950px", margin:"50px auto"}}>
      <Line data={data} options={options}/>
      </div>
    </div>
  )
}

export default StatProfit