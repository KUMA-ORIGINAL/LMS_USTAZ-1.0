import React from 'react'
import { Link } from 'react-router-dom'

const arrayForStudents = [
  {
    title: 'Оценки',
    link: '/course/lecture',
  },
  {
    title: 'Курсы',
    link: '/course/rating',
  },
]

const StudentSideBar = () => {
  return (
    <>
      {arrayForStudents.map((item) => {
        return (
          <Link to={item.link} className="aside__item">
            <span className="aside__title">{item.title}</span>
            <span className="aside__arrow"> {'>'} </span>
          </Link>
        )
      })}
    </>
  )
}

export default StudentSideBar
