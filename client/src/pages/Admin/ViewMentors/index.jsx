import React from 'react'
import './index.css'
import MentorCard from './components/MentorCard'
import SideBar from '../Components/SideBar'

const ViewMentors = () => {
  return (
    <>
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

export default ViewMentors
