import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import "./index.css"
const Lesson = ({type, title}) => {
  return (
    <Paper elevation={3} className="lesson-card" >
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <button className='lesson__card-btn' >
          {type === "student" ?  <RemoveRedEyeOutlinedIcon/> : <EditIcon/>}
        </button>
    </Paper>
  )
}

export default Lesson