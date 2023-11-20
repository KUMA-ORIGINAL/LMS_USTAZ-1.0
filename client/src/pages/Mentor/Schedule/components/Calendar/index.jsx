import {useState} from 'react';
import Modal from "../../../../../components/Modal"
import { format, getDay, startOfMonth, endOfMonth, eachDayOfInterval, addDays } from 'date-fns';
import EditIcon from '@mui/icons-material/Edit';
import { useTheme } from "@mui/material";
import { tokens } from "../../../../../theme";
import './index.css';


const week = [
  'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'
]

const Calendar = ({ year, month, lessons }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [modal, setModal] = useState(false);
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
        {week.map((day) => (
          <div  className="day bold" key={day}>
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-dates">
        {Array.from({ length: startDayOfWeek }).map((_, index) => (
          <div  className="day" key={`empty-${index}`}>
          </div>
        ))}
        {dates.map((date) => (
          <div  className="day" key={date}>
            {format(date, 'd')}
            {lessons.map((lesson) => {
              if (lesson.date === format(date, 'yyyy-MM-dd')) {
                console.log('Занятие найдено:', lesson.title);
                return (
                  <div key={lesson.id} className="lesson" style={{background:colors.iceAccent[800]}}>
                    <div className="lesson-header">
                      {lesson.startTime} - {lesson.endTime}
                      <EditIcon  sx={{ fontSize: 15 }} onClick={() => setModal(true)} className='lesson-dropdown' />
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
      <Modal active={modal} setActive={setModal}>
      <div className="" style={{display:"flex", flexDirection:"column"}}>
      <h3 style={{color:"black"}}>Добавить занятие</h3>
      <input type="text" placeholder='Название темы' style={{padding:"15px", margin:"20px 0px"}}/>
      <input type="datetime-local" style={{padding:"15px"}} />
      </div>
      </Modal>
    </>
  );
};

export default Calendar;
