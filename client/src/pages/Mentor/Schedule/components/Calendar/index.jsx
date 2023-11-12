import {useState} from 'react';
import Modal from "../../../../../components/Modal"
import { format, getDay, startOfMonth, endOfMonth, eachDayOfInterval, addDays } from 'date-fns';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './index.css';


const Calendar = ({ year, month, lessons }) => {

  const [modalActive, setModalActive] = useState(false);

  const firstDayOfMonth = startOfMonth(new Date(year, month, 1));
  const lastDayOfMonth = endOfMonth(new Date(year, month, 1));
  const dates = eachDayOfInterval({ start: firstDayOfMonth, end: lastDayOfMonth });
  let startDayOfWeek = getDay(firstDayOfMonth);
  startDayOfWeek = (startDayOfWeek === 0) ? 6 : startDayOfWeek - 1;

  const monthName = format(firstDayOfMonth, 'MMMM yyyy');

  return (
    <>
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
          </div>
        ))}

        {dates.map((date) => (
          <div className="day" key={date}>
            {format(date, 'd')}
            {lessons.map((lesson) => {
              if (lesson.date === format(date, 'yyyy-MM-dd')) {
                console.log('Занятие найдено:', lesson.title);
                return (
                  <div key={lesson.id} className="lesson">
                    <div className="lesson-header">
                      {lesson.startTime} - {lesson.endTime}
                      <ArrowDropDownIcon onclick={() => setModalActive(true)} className='lesson-dropdown' />
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
      <Modal active={modalActive} setActive={setModalActive}>
        Cancel
      </Modal>
    </>
  );
};

export default Calendar;
