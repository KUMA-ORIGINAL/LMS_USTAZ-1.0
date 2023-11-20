import React from 'react';
import './index.css';

const ProfileCard = () => {
  const storedUserData = JSON.parse(localStorage.getItem('user')) || {}; // Provide an empty object as a default
  const { role, last_name, first_name, email, profile_photo } = storedUserData;

  return (
    <div className="profile-card">
      <div className='profile__card-role'>{role || ''}</div>
      <img
        src={`http://localhost:8000/${profile_photo || 'https://i.pinimg.com/564x/48/6c/a0/486ca00640b169300b48e9ceacd8e401.jpg'}`}
        className="profile__card-img"
        alt="User Avatar"
      />
      <div className='profile__card-wrapper'>
        <h3 className="profile__card-title">{last_name || ''} {first_name || ''}</h3>
        <p className="profile__card-email">{email || ''}</p>
      </div>
      <button className="profile__card-btn">Выйти</button>
    </div>
  );
};

export default ProfileCard;
