// import React, { useEffect, useState } from 'react';
// import NewsList from '../../../components/NewsList';
// import CourseCard from '../../../components/CourseCard';
// import axios from 'axios';


// const MentorHome = () => {

//   const [courseData, setCourseData] = useState(null);

//   const storedUserData = JSON.parse(localStorage.getItem("user"));
//   const authToken = `Bearer ${storedUserData.tokens.access}`;
//   useEffect(() => {
//     const courseId = 3; // Замените это значение на нужный вам ID

//     axios.get(`http://localhost:8000/api/course/${courseId}`, {
//       headers: {
//         Authorization: authToken,
//       },
//     })
//       .then(response => {
//         setCourseData(response.data);
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.error('Ошибка при загрузке данных курса:', error);
//       });
//   }, []); // Пустой массив зависимостей означает, что запрос будет выполнен только один раз при загрузке компонента


//   if (courseData) {
//     // Здесь вы можете отображать полученные данные о курсе
//     return (
//       <div>
//         <h1>Детали курса</h1>
//         <img src={courseData.photo} alt="" />
//         <p>Название курса: {courseData.name}</p>
//         <p>Описание курса: {courseData.description}</p>
//         {/* Другие поля курса */}
//       </div>
//     );
//   } else {
//     return <div>Loading...</div>;
//   }
// }

// export default MentorHome;

import React from 'react'
import CourseCard from '../../../components/CourseCard'

const MentorHome = () => {
  return (
    <div>
    <CourseCard/>
    </div>
  )
}

export default MentorHome