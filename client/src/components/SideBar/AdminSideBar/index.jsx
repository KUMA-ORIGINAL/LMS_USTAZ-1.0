import React from 'react'
import { Link } from 'react-router-dom'

const arrayForAdmins = [
  {
    title: 'Аналитика',
    link: '/admin/finance',
  },
  {
    title: 'Сотрудники',
    link: '/admin/mentors',
  },
  {
    title: 'Курсы',
    link: '/admin/courses',
  },
  {
    title: 'Студенты',
    link: '/admin/students',
  },
]

const AdminSideBar = () => {
  return (
    <>
      {arrayForAdmins.map((item) => {
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

export default AdminSideBar
