import React, { useState } from 'react';
import "./index.css";

const ProfileInfo = () => {
  const storedUserData = JSON.parse(localStorage.getItem("user"));
  const [highlightedHeader, setHighlightedHeader] = useState(null);

  const handleTdHover = (header) => {
    setHighlightedHeader(header);
  }

  const handleTdMouseLeave = () => {
    setHighlightedHeader(null);
  }

  return (
    <table className='profile-info'>
      <tr>
        <th className={highlightedHeader === 'last_name' ? 'highlighted' : ''}>Фамилия</th>
        <td onMouseEnter={() => handleTdHover('last_name')} onMouseLeave={handleTdMouseLeave}>{storedUserData.last_name}</td>
      </tr>
      <tr>
        <th className={highlightedHeader === 'first_name' ? 'highlighted' : ''}>Имя</th>
        <td onMouseEnter={() => handleTdHover('first_name')} onMouseLeave={handleTdMouseLeave}>{storedUserData.first_name}</td>
      </tr>
      <tr>
        <th className={highlightedHeader === 'position' ? 'highlighted' : ''}>Должность</th>
        <td onMouseEnter={() => handleTdHover('position')} onMouseLeave={handleTdMouseLeave}>{storedUserData.position} Разработчик</td>
      </tr>
      <tr>
        <th className={highlightedHeader === 'birth_date' ? 'highlighted' : ''}>Год рождения</th>
        <td onMouseEnter={() => handleTdHover('birth_date')} onMouseLeave={handleTdMouseLeave}>{storedUserData.birth_date}</td>
      </tr>
      <tr>
        <th className={highlightedHeader === 'telegram' ? 'highlighted' : ''}>Telegram ник</th>
        <td onMouseEnter={() => handleTdHover('telegram')} onMouseLeave={handleTdMouseLeave}>@ivan_mentor</td>
      </tr>
      <tr>
        <th className={highlightedHeader === 'phone_number' ? 'highlighted' : ''}>Номер телефона</th>
        <td onMouseEnter={() => handleTdHover('phone_number')} onMouseLeave={handleTdMouseLeave}>{storedUserData.phone_number}</td>
      </tr>
    </table>
  )
}

export default ProfileInfo;
