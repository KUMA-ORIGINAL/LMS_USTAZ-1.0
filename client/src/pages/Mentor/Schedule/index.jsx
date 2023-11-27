import { useState, useEffect } from 'react';
import ScheduleService from '../../../services/ScheduleService';
import Calendar from './components/Calendar';
import Modal from '../../../components/Modal';

const MentorSchedule = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [lesson, setLesson] = useState([]);
  const [modal, setModal] = useState(false)
  const [title, setTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState('');
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("");

  const getSchedule = async () => {
    try {
      const response = await ScheduleService.getSchedule(11);
      setLesson(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    getSchedule();
  }, [])

  const uniqueMonths = [...new Set(lesson.map(data => data.date.split('-')[1]))];

  const createSchedule = async() =>{
    try {
      const newData = {
          title: title,
          description: "string",
          date: selectedDate,
          start_time: startTime,
          end_time: endTime,
          course: 11
      }
      const response  = await ScheduleService.createSchedule(newData);
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <div>
     {user.role === "mentor" ?  <button onClick={() => setModal(true)}>Добавить занятие</button> : null}
      {uniqueMonths.map(month => {
        const firstLessonOfMonth = lesson.find(data => data.date.split('-')[1] === month);
        if (firstLessonOfMonth) {
          const year = firstLessonOfMonth.date.split('-')[0];
          return <Calendar key={`${year}-${month}`} year={year} month={month - 1} lessons={lesson} />;
        }
        return null;
      })}
      {user.role === "mentor" ? 
    <Modal active={modal} setActive={setModal}>
      <div className="" style={{display:"flex", flexDirection:"column"}}>
      <h3 style={{color:"black"}}>Добавить занятие</h3>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Название темы' style={{padding:"15px", margin:"10px 0px"}}/>
      <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} style={{padding:"15px", margin:"10px 0px"}} />
      <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} style={{padding:"15px", margin:"10px 0px"}} />
      <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}   pattern="\d{4}-\d{2}-\d{2}"  placeholder="yyyy-mm-dd"/>
      <button onClick={createSchedule} >Сохранить занятие</button>
      </div>
    </Modal> : null}
    </div>
  );
};

export default MentorSchedule;
