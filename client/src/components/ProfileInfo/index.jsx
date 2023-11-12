import React from 'react'
import "./index.css";


const ProfileInfo = () => {
  const storedUserData = JSON.parse(localStorage.getItem("user"));
  console.log(storedUserData);
  return (
    <table className='profile-info'>
    <tr>
      <th>Фамилия</th>
      <td>{storedUserData.last_name}</td>
    </tr>
    <tr>
      <th>Имя</th>
      <td>{storedUserData.first_name}</td>
    </tr>
    <tr>
      <th>Должность</th>
      <td>{storedUserData.position.toUpperCase()} Разработчик</td>
    </tr>
    <tr>
      <th>Год рождения</th>
      <td>{storedUserData.birth_date}</td>
    </tr>
    <tr>
      <th>Telegram ник</th>
      <td>@ivan_mentor</td>
    </tr>
    <tr>
      <th>Номер телефона</th>
      <td>{storedUserData.phone_number}</td>
    </tr>
</table>
  )
}

export default ProfileInfo