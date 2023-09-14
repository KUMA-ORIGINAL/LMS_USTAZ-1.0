import React from 'react'
import './index.css'
import profileImg from '../../assets/images/profile-avatar.png'
import StudentSideBar from './StudentSideBar'
import { Link } from 'react-router-dom'

const user = { name: 'Ramzan', link: '/profile' }

const SideBar = () => {
  return (
    <aside className="aside">
      <div className="aside__content">
        <Link to={user.link} className="aside__profile-block">
          <img src={profileImg} alt="" className="aside__profile-img" />
          <span className="aside__profile-name">{user.name}</span>
        </Link>
        <div className="aside__dropdown">
          <StudentSideBar></StudentSideBar>
        </div>
      </div>
    </aside>
  )
}

export default SideBar
