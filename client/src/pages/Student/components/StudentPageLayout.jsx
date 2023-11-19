import React from 'react'
import SideBar from './Navigation'
import { Outlet } from 'react-router-dom'
import Header from '../../../components/Header'

const StudentPageLayout = () => {
  return (
    <div className='admin-content'>
        <SideBar/>
        <div className="content">
        <div className="" style={{height:"100px"}}>
       <Header/>
        </div>
        <Outlet/>
        </div>
    </div>
  )
}

export default StudentPageLayout