import React from 'react'
import Attendens from './components/Attendens';

const MentorVisits = () => {
  const dataFromBackend = {
    dates: ['01.01', '01.02', '01.03', '01.04', '01.05', '01.06', "01.07"],
    students: [
      {
        name: 'Иванов Иван',
        visits: ['check', 'check', 'check', 'cancel', 'check', 'cancel', "check"],
      },
      {
        name: 'Петров Петр',
        visits: ['check', 'cancel', 'check', 'check', 'cancel', 'check', "cancel"],
      },
      {
        name: 'Сидоров Алексей',
        visits: ['check', 'cancel', 'check', 'check', 'cancel', 'check', "cancel"],
      },
      {
        name: 'Козлов Николай',
        visits: ['check', 'cancel', 'check', 'check', 'cancel', 'check', "cancel"],
      },
      {
        name: 'Морозов Николай',
        visits: ['check', 'cancel', 'check', 'check', 'cancel', 'check', "cancel"],
      },
      {
        name: 'Васильев Дмитрий',
        visits: ['check', 'cancel', 'check', 'check', 'cancel', 'check', "cancel"],
      },      {
        name: 'Павлов Андрей',
        visits: ['check', 'cancel', 'check', 'check', 'cancel', 'check', "cancel"],
      },
      {
        name: 'Федоров Артем',
        visits: ['check', 'check', 'check', 'check', 'cancel', 'check', "cancel"],
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