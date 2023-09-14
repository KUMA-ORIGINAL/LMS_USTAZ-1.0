import { Route, Routes } from 'react-router-dom'

import Introduction from './Introduction'
import Profile from './Profile'
import Authorization from './Authorization'
import Finance from './Finance'
import Course from './Course'
import Mentors from './Mentors'
import Rating from './Rating'
import AdminCourses from './AdminCourses'
import AdminStudents from './AdminStudents'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/auth" element={<Authorization />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin/finance" element={<Finance />} />
        <Route path="/admin/mentors" element={<Mentors />} />
        <Route path="/admin/courses" element={<AdminCourses />} />
        <Route path="/admin/students" element={<AdminStudents />} />
        <Route path="/course/lecture" element={<Course />} />
        <Route path="/course/rating" element={<Rating />} />
      </Routes>
    </>
  )
}

export default Routing
