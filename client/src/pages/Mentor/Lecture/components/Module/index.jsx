import React from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import Lesson from '../Lesson/index';
import "./index.css";

const Module = () => {
  return (
    <div className='module'>
      <Paper elevation={2} className="module-card">
        <div className="module__card-info">
          <Typography variant="h5" component="div">
            1.HTML
          </Typography>
          <Typography variant="body2">
            Язык гипертекствой разметки
          </Typography>
        </div>
        <button className='module__info-btn'>
          <AttachFileOutlinedIcon />
          Добавить урок
        </button>
      </Paper>
      <Lesson />
    </div>
  )
}

export default Module