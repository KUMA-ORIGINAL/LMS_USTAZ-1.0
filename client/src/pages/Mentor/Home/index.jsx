import React, { useState } from 'react'
import CourseCard from '../../../components/CourseCard'
import NewsList from '../../../components/NewsList'
import CourseService from '../../../services/CourseService'

const MentorHome = () => {
  const [data, setData] = useState([]);

  async function getCourse() {
    try {
      const response = await CourseService.getCourse();
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      }
    }
  }
  return (
    <>
      <h2 style={{marginBottom:"20px"}}>Курсы</h2>
        <button onClick={getCourse}>Click</button>
      <div style={{display:"flex", flexWrap:"wrap", gap:"20px",}}>
        {data.map((course) => (
  <CourseCard key={course.id} data={course} />
))}
      </div>
      <h2 style={{margin:"20px 0px"}}>
        Новости
        </h2>
      <NewsList/>
    </>
  )
}

export default MentorHome;