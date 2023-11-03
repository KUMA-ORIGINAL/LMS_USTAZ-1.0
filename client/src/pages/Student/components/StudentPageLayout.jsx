import React from 'react'
import SideBar from './Navigation'
import { Outlet } from 'react-router-dom'

const StudentPageLayout = () => {
  return (
    <div className='admin-content'>
        <SideBar/>
        <div className="admin-panel">
        <Outlet/>
        </div>
    </div>
  )
}

export default StudentPageLayout