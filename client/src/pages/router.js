import { Route, Routes } from 'react-router-dom'

import Introduction from "./Introduction";
import Profile from './Profile';
import Authorization from './Authorization';
import Finance from './Finance';
import Course from "./Course";

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Introduction/>}/>
      <Route path='/auth' element={<Authorization/>}/>
      <Route path='/profile' element={<Profile/>}/>

      <Route path='/admin/finance' element={<Finance/>}/>

      <Route path='/course/info' element={<Course/>}/>
    </Routes>
  )
}

export default Routing