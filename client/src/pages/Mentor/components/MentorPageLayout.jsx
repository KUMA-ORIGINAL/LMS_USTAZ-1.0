import React from 'react'
import SideBar from './Navigation'
import { Outlet } from 'react-router-dom'

const MentorPageLayout = () => {
  return (
    <div className='admin-content'>
        <SideBar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default MentorPageLayout