import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='admin-content'>
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default AdminLayout