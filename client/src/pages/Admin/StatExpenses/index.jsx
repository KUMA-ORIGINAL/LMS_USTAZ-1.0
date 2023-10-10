import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {Box} from "@mui/material"

const StatExpenses = () => {
 const data = {
    labels: ['Maksat', 'Ramzan', 'Kurmanbek', 'Hackathon', 'Laptop'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
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
  };  
  return (
    <Box sx={{width:"500px"}}>
      <Pie data={data} />
    </Box>
  )
}

export default StatExpenses