import React from 'react'
import SideBar from './Navigation'
import { Outlet } from 'react-router-dom'

const StudentPageLayout = () => {
  return (
    <div className='admin-content'>
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default StudentPageLayout