import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import Lesson from '../Lesson/index';
import Modal from '../../../../../components/Modal';
import { useTheme } from "@mui/material";
import { tokens } from "../../../../../theme";
import { Link } from "react-router-dom";
import "./index.css";

const Module = () => {

  const html = [
    { title: "Структура документа" },
    { title: "Элементы и атрибуты" },
    { title: "Заголовки и абзацы" },
    { title: "Списки" }
  ];

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className='module'>
      <Paper elevation={2} className="module-card">
        <div className="module__card-info">
          <Typography variant="h5" component="div">
            1.HTML
          </Typography>
          <Typography variant="body2">
            Язык гипертекстовой разметки
          </Typography>
        </div>
        <Link to="/mentor/create-lesson" >
          <AttachFileOutlinedIcon />
          Добавить урок
        </Link>
      </Paper>
      {html.map((data) => (
        <Lesson title={data.title} />
      ))}
    </div>
  );
};

export default Module;
