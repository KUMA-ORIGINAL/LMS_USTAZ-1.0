import { Route, Routes } from 'react-router-dom'

import Introduction from "./Introduction";
import Profile from './Profile';
import Authorization from './Authorization';
import Finance from './Finance';
import Course from "./Course";
import MentorCard from './Mentors/components/MentorCard';

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Introduction/>}/>
      <Route path='/auth' element={<Authorization/>}/>
      <Route path='/profile' element={<Profile/>}/>

      <Route path='/admin/finance' element={<Finance/>}/>
      <Route path='/admin/mentors' element={<Mentors/>}/>
      <Route path='/admin/courses'/>

      <Route path='/course/lecture' element={<Course/>}/>
      <Route path='/course/rating' element={<Rating/>}/>
    </Routes>
  )
}

export default Routing