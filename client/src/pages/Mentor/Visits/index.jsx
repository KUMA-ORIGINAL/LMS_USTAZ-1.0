import React from 'react'
import Attendens from './components/Attendens';

const MentorVisits = () => {
  const dataFromBackend = {
    dates: ['01.01', '01.02', '01.03', '01.04', '01.05', '01.06', "01.07"],
    students: [
      {
        name: 'Асанов Курманбек',
        visits: ['check', 'check', 'check', 'cancel', 'check', 'cancel', "check"],
      },
      {
        name: 'Каныбеков Максат',
        visits: ['check', 'cancel', 'check', 'check', 'cancel', 'check', "cancel"],
      },
      {
        name: 'Малабакиев Рамзан',
        visits: ['check', 'cancel', 'check', 'check', 'cancel', 'check', "cancel"],
      },
      {
        name: 'Раймжанов Байтур',
        visits: ['check', 'cancel', 'check', 'check', 'cancel', 'check', "cancel"],
      },
      {
        name: 'Мамбеткулов Ормон',
        visits: ['check', 'cancel', 'check', 'check', 'cancel', 'check', "cancel"],
      },
      {
        name: 'Максатбек у Марсель',
        visits: ['check', 'cancel', 'check', 'check', 'cancel', 'check', "cancel"],
      },      {
        name: 'Канатбеков Саламат',
        visits: ['check', 'cancel', 'check', 'check', 'cancel', 'check', "cancel"],
      },
      {
        name: 'Конурбаев Амир',
        visits: ['check', 'check', 'check', 'check', 'cancel', 'check', "cancel"],
      },
    ],
  };
  return (
    <div className='content'>
     <Attendens data={dataFromBackend}/>
    </div>

  )
}

export default MentorVisits