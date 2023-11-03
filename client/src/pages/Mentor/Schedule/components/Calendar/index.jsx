import React from 'react';
import { format, getDay, startOfMonth, endOfMonth, eachDayOfInterval, addDays } from 'date-fns';
import './index.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Calendar = ({ year, month, lessons }) => {

    const firstDayOfMonth = startOfMonth(new Date(year, month, 1));
    const lastDayOfMonth = endOfMonth(new Date(year, month, 1));
    const dates = eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth });
    let startDayOfWeek = getDay(firstDayOfMonth);
    startDayOfWeek = (startDayOfWeek === 0) ? 6 : startDayOfWeek - 1;
      
  const monthName = format(firstDayOfMonth, 'MMMM yyyy');

  return (
    <div className="lessons-calendar">
            <div className="calendar-header">
        <h2>{monthName}</h2>
      </div>
            <div className="days-of-week">
        {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day) => (
          <div className="day bold" key={day}>
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-dates">
        {Array.from({ length: startDayOfWeek }).map((_, index) => (
          <div className="day" key={`empty-${index}`}>
            {/* Empty cells for days before the 1st */}
          </div>
        ))}

        {dates.map((date) => (
          <div className="day" key={date}>
            {format(date, 'd')}
            {/* Отображение занятий на соответствующих днях */}
            {lessons.map((lesson) => {
  if (lesson.date === format(date, 'yyyy-MM-dd')) {
    console.log('Занятие найдено:', lesson.title);
    return (
      <div key={lesson.id} className="lesson">
        <div className="lesson-header">
            {lesson.startTime} - {lesson.endTime}
            <ArrowDropDownIcon/>
        </div>
        {lesson.title}
      </div>
    );
  }
  return null;
})}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
