import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import "./index.css"
const Lesson = () => {
  return (
    <Paper elevation={3} className="lesson-card" >
        <Typography variant="h6" component="div">
          Основные теги в HTML
        </Typography>
        <button className='lesson__card-btn' >
        <EditIcon/>
        </button>
    </Paper>
  )
}

export default Lesson