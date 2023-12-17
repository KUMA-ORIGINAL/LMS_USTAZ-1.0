import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import Lesson from '../Lesson/index';
import Modal from '../../../../../components/Modal';
import { Button, useTheme } from "@mui/material";
import { tokens } from "../../../../../theme";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import ModuleService from '../../../../../services/ModuleService';

const Module = ({data}) => {
  const {title, description, id, order} = data
  const [lectures, setLectures] = useState([])
  const navigate = useNavigate();

  const redirectToCreateLesson = () =>{
    navigate("/mentor/create-lesson")
  }
  
  const getLectures = async () => {
    try {
      const response = await ModuleService.getLectures(id);
      setLectures(response.data)
    } catch (error) {
      console.log(error.response);
    }
  }

  useEffect(() => {
    getLectures();
  },[]);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className='module'>
      <Paper elevation={2} className="module-card">
        <div className="module__card-info">
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">
           {description}
          </Typography>
        </div>
        <Link to={`/mentor/create-lesson/lesson/${id}`} variant="contained" sx={{background:"grey"}}>
          <AttachFileOutlinedIcon />
          Добавить урок
        </Link>
      </Paper>
      {lectures.map((data) => (
        <Lesson title={data.title} id={data.id}/>
      ))}
    </div>
  );
};

export default Module;
