import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import "./index.css";

const ProfileInfo = () => {
  const storedUserData = JSON.parse(localStorage.getItem("user")) || {};


  return (
    <table className='profile-info'>
      <tr>
        <th>Фамилия</th>
        <td>
          <input type="text" value={storedUserData.last_name || ""} />
          <IconButton sx={{padding:"2px"}}>
        <EditIcon/>
          </IconButton>
        </td>
      </tr>
      <tr>
        <th>Имя</th>
        <td>
        <input type="text" value={storedUserData.first_name || ""} />
          <IconButton sx={{padding:"2px"}}>
        <EditIcon/>
          </IconButton>
        </td>
      </tr>
      <tr>
        <th>Должность</th>
        <td>
        <input type="text" value="*******" />
          <IconButton sx={{padding:"2px"}}>
        <EditIcon/>
          </IconButton>
        </td>
      </tr>
      <tr>
        <th>Telegram</th>
        <td>
        <input type="text" value={storedUserData.first_name || ""} />
          <IconButton sx={{padding:"2px"}}>
        <EditIcon/>
          </IconButton>
        </td>
      </tr>
      <tr>
        <th>Номер телефона</th>
        <td>
        <input type="text" value={storedUserData.phone_number || ""} />
          <IconButton sx={{padding:"2px"}}>
        <EditIcon/>
          </IconButton>
        </td>
      </tr>
      <tr>
        <th>Пароль</th>
        <td>
        <input type="text" value="*******" />
          <IconButton sx={{padding:"2px"}}>
        <EditIcon/>
          </IconButton>
        </td>
      </tr>
      
    </table>
  )
}

export default ProfileInfo;
