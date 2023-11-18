import React from 'react'
import CourseCard from '../../../components/CourseCard'
import NewsList from '../../../components/NewsList'

const MentorHome = () => {
  return (
    <>
      <h2 style={{marginBottom:"20px"}}>Курсы</h2>
      <div style={{display:"flex", flexWrap:"wrap", gap:"20px",}}>
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
      </div>
      <h2 style={{margin:"20px 0px"}}>
        Новости
        </h2>
      <NewsList/>
    </>
  )
}

export default MentorHome;