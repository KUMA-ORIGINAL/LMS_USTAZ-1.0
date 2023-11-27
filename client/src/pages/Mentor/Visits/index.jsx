import React from 'react'
import Attendens from './components/Attendens';

const MentorVisits = () => {
  const dataFromBackend = {
    students: [
      {
        name: 'Иванов Иван',
        visits: [
          { date: '01.01', status: true },
          { date: '01.02', status: true },
          { date: '01.03', status: true },
          { date: '01.04', status: false },
          { date: '01.05', status: true },
          { date: '01.06', status: false },
          { date: '01.07', status: true },
        ],
      },
      {
        name: 'Иванов Иван',
        visits: [
          { date: '01.01', status: true },
          { date: '01.02', status: true },
          { date: '01.03', status: true },
          { date: '01.04', status: false },
          { date: '01.05', status: true },
          { date: '01.06', status: false },
          { date: '01.07', status: true },
        ],
      },
      {
        name: 'Иванов Иван',
        visits: [
          { date: '01.01', status: true },
          { date: '01.02', status: false },
          { date: '01.03', status: false },
          { date: '01.04', status: false },
          { date: '01.05', status: true },
          { date: '01.06', status: false },
          { date: '01.07', status: true },
        ],
      },
    ],
  };
  return (
    <div className='content'>
      <h2 style={{marginBottom:"20px"}}>Посещения студентов</h2>
     <Attendens data={dataFromBackend}/>
    </div>

  )
}

export default MentorVisits