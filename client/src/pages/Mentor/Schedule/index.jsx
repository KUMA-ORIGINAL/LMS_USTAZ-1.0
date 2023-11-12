// import React, { useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// const localizer = momentLocalizer(moment);

// const initialLessons = [
//   {
//     title: 'Урок 1',
//     start: new Date(2023, 10, 6, 15, 30),
//     end: new Date(2023, 10, 6, 17, 0),
//   },
//   {
//     title: 'Урок 2',
//     start: new Date(2023, 10, 8, 15, 30),
//     end: new Date(2023, 10, 8, 17, 0),
//   },
//   {
//     title: 'Урок 3',
//     start: new Date(2023, 10, 10, 15, 30),
//     end: new Date(2023, 10, 10, 17, 0),
//   },
// ];

// const MentorSchedule = () => {
//   const [lessons, setLessons] = useState(initialLessons);

//   const handleSelect = ({ start, end }) => {
//     const title = window.prompt('Введите название урока:');
//     if (title) {
//       const newLesson = {
//         title,
//         start,
//         end,
//       };
//       setLessons([...lessons, newLesson]);
//     }
//   };

//   return (
//     <div>
//       <Calendar
//         localizer={localizer}
//         events={lessons}
//         startAccessor="start"
//         endAccessor="end"
//         titleAccessor="title"
//         style={{ width:"1050px", height: 640 }}
//         selectable
//         onSelectSlot={handleSelect}
//         views={['month',  'agenda']}
//         formats={{
//           timeGutterFormat: 'HH:mm',
//           eventTimeRangeFormat: ({ start, end }) =>
//             `${moment(start).format('HH:mm')} - ${moment(end).format('HH:mm')}`,
//         }}
//         components={{
//           timeIndicator: "12" // Подставьте ваш собственный компонент для отображения времени
//         }}
//       />
//     </div>
//   );
// };

// const CustomTimeIndicator = () => (
//   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
//     <div style={{ textAlign: 'center' }}>
//      1240
//     </div>
//   </div>
// );

// export default MentorSchedule;
import React from 'react';
import Calendar from './components/Calendar';

const MentorSchedule = () => {
  const lessonsData = [
    {
      id: 1,
      title: 'Введение в веб разработку',
      date: '2023-11-01',
      startTime: '15:30',
      endTime: '17:00',
      description: 'Описание занятия 1',
    },
    {
      id: 2,
      title: 'Занятие 2',
      date: '2023-11-03',
      startTime: '15:30',
      endTime: '17:00',
      description: 'Описание занятия 2',
    },
    {
      id: 3,
      title: 'Занятие 3',
      date: '2023-11-06',
      startTime: '15:30',
      endTime: '17:00',
      description: 'Описание занятия 2',
    },
    {
      id: 4,
      title: 'Занятие 4',
      date: '2023-11-08',
      startTime: '15:30',
      endTime: '17:00',
      description: 'Описание занятия 2',
    },
    {
      id: 5,
      title: 'Занятие 5',
      date: '2023-11-10',
      startTime: '15:30',
      endTime: '17:00',
      description: 'Описание занятия 2',
    },
    {
      id: 6,
      title: 'Занятие 5',
      date: '2023-11-13',
      startTime: '15:30',
      endTime: '17:00',
      description: 'Описание занятия 2',
    },
    {
      id: 7,
      title: 'Занятие 5',
      date: '2023-11-15',
      startTime: '15:30',
      endTime: '17:00',
      description: 'Описание занятия 2',
    },
    {
      id: 8,
      title: 'Занятие 5',
      date: '2023-11-17',
      startTime: '15:30',
      endTime: '17:00',
      description: 'Описание занятия 2',
    },
    {
      id: 9,
      title: 'Занятие 5',
      date: '2023-11-20',
      startTime: '15:30',
      endTime: '17:00',
      description: 'Описание занятия 2',
    },
    {
      id: 10,
      title: 'Занятие 5',
      date: '2023-11-22',
      startTime: '15:30',
      endTime: '17:00',
      description: 'Описание занятия 2',
    },
    {
      id: 11,
      title: 'Занятие 5',
      date: '2023-11-24',
      startTime: '15:30',
      endTime: '17:00',
      description: 'Описание занятия 2',
    },
    {
      id: 1,
      title: 'Введение в веб разработку',
      date: '2023-12-01',
      startTime: '15:30',
      endTime: '17:00',
      description: 'Описание занятия 1',
    },
    {
      id: 2,
      title: 'Занятие 2',
      date: '2023-12-04',
      startTime: '15:30',
      endTime: '17:00',
      description: 'Описание занятия 2',
    },
    {
      id: 3,
      title: 'Занятие 3',
      date: '2023-12-06',
      startTime: '15:30',
      endTime: '17:00',
      description: 'Описание занятия 2',
    },
    {
      id: 4,
      title: 'Занятие 4',
      date: '2023-12-08',
      startTime: '15:30',
      endTime: '17:00',
      description: 'Описание занятия 2',
    },
    {
      id: 5,
      title: 'Занятие 5',
      date: '2023-12-11',
      startTime: '15:30',
      endTime: '17:00',
      description: 'Описание занятия 2',
    },
    {
      id: 6,
      title: 'Занятие 5',
      date: '2023-12-13',
      startTime: '15:30',
      endTime: '17:00',
      description: 'Описание занятия 2',
    },
    {
      id: 7,
      title: 'Занятие 5',
      date: '2023-12-15',
      startTime: '15:30',
      endTime: '17:00',
      description: 'Описание занятия 2',
    },
    {
      id: 8,
      title: 'Занятие 5',
      date: '2023-12-18',
      startTime: '15:30',
      endTime: '17:00',
      description: 'Описание занятия 2',
    },
    {
      id: 9,
      title: 'Занятие 5',
      date: '2023-12-20',
      startTime: '15:30',
      endTime: '17:00',
      description: 'Описание занятия 2',
    },
    {
      id: 10,
      title: 'Занятие 5',
      date: '2023-12-22',
      startTime: '15:30',
      endTime: '17:00',
      description: 'Описание занятия 2',
    },
    {
      id: 11,
      title: 'Занятие 5',
      date: '2023-12-25',
      startTime: '15:30',
      endTime: '17:00',
      description: 'Описание занятия 2',
    },
  ];

  return (
    <div>
      <Calendar year={2023} month={10} lessons={lessonsData} />
      <Calendar year={2023} month={11 } lessons={lessonsData} />
    </div>
  );
};

export default MentorSchedule;
