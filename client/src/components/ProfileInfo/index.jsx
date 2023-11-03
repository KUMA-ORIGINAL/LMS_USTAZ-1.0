import React from 'react'
import "./index.css";

const ProfileInfo = () => {
  return (
    <table className='profile-info'>
    <tr>
      <th>Фамилия</th>
      <td>Петров</td>
    </tr>
    <tr>
      <th>Имя</th>
      <td>Иван</td>
    </tr>
    <tr>
      <th>Должность</th>
      <td>Front-End Разработчик</td>
    </tr>
    <tr>
      <th>Год рождения</th>
      <td>1985</td>
    </tr>
    <tr>
      <th>Telegram ник</th>
      <td>@ivan_mentor</td>
    </tr>
    <tr>
      <th>Номер телефона</th>
      <td>+7 (123) 456-7890</td>
    </tr>
</table>
  )
}

export default ProfileInfo