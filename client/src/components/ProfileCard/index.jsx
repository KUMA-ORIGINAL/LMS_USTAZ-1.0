import React from 'react'
import "./index.css";


const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className='profile__card-role'>Mentor</div>
      <img src="https://i.pinimg.com/564x/48/6c/a0/486ca00640b169300b48e9ceacd8e401.jpg" className="profile__card-img" />
      <div className='profile__card-wrapper'>
        <h3 className="profile__card-title">Maksat Kanybekov</h3>
        <p className="profile__card-email">maksatkanybekov@2004gmail.com</p>
      </div>
      <button className="profile__card-btn">Выйти</button>
    </div>
  )
}

export default ProfileCard