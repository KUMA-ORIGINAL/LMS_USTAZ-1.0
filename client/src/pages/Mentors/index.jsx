import React from 'react'
import SideBar from '../../components/SideBar'
import './index.css'
import MentorCard from './components/MentorCard'

const Mentors = () => {
  return (
    <>
      <SideBar></SideBar>
      <section className="mentors">
        <div className="container">
          <h2 className="mentors__title">Менторы</h2>
          <div className="mentors__content">
            <MentorCard></MentorCard>
          </div>
        </div>
      </section>
    </>
  )
}

export default Mentors
