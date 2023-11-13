
import React from 'react'
import CourseCard from '../../../components/CourseCard'

const MentorHome = () => {
  return (
    <>
      <h3>Дисциплины</h3>
    <div style={{display:"flex", flexWrap:"wrap", gap:"50px",}}>
    <CourseCard/>
    <CourseCard/>
    <CourseCard/>
    <CourseCard/> 
    </div>
  
    </>
  )
}

export default MentorHome