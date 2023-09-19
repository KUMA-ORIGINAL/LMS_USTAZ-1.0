import {useState} from 'react'
import SideBar from '../../../components/SideBar'
import BarChart from './BarChart'
import {UserData} from "./Data"
import { Line } from 'react-chartjs-2'
import LineChart from './LineChart'
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJs} from "chart.js/auto"


const Finance = () => {

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
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };

  
  return (
    <>
      {/* <SideBar></SideBar> */}
      <div className='containe' style={{width:"700px"}}>
       {/* <BarChart chartData={userData}/>  */}
      {/* <LineChart chartData={userData}/> */}
      <Bar data={userData} options={options} />

      </div>
    </>
  )
}

export default Finance
