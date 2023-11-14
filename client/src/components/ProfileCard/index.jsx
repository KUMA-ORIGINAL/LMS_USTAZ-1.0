import React from 'react'
import "./index.css";


const ProfileCard = () => {
  const storedUserData = JSON.parse(localStorage.getItem("user"));

    console.log(storedUserData, "ld");
  return (
    <div className="profile-card">
      <div className='profile__card-role'>{storedUserData.role}</div>
      <img src={`http://localhost:8000/${storedUserData.profile_photo}` || "https://i.pinimg.com/564x/48/6c/a0/486ca00640b169300b48e9ceacd8e401.jpg"} className="profile__card-img" />
      <div className='profile__card-wrapper'>
        <h3 className="profile__card-title">{storedUserData.last_name} {storedUserData.first_name}</h3>
        <p className="profile__card-email">{storedUserData.email }</p>
      </div>
      <button className="profile__card-btn">Выйти</button>
    </div>
  )
}

export default ProfileCard