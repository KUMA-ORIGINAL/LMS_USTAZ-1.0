import React from 'react'
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import Typography from '@mui/material/Typography';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import Lesson from '../Lesson/index';
import "./index.css";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';

const Module = () => {
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    marginTop:"20px",
    background: "none",
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));


  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: 0,
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    backgroundColor:"none", 
  }));
  

  return (
    <div className='module-content'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="moduls">
            <div className="">
          <Typography variant="h5" component="div">
            1.HTML
          </Typography>
          <Typography variant="body2">
            Язык гипертекствой разметки
          </Typography>
            </div>
            <div className="">
          <button className='module__info-btn'>
            <FolderOpenOutlinedIcon />
           Изучить
          </button>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Lesson type={"student"} />
          <Lesson type={"student"} />
          <Lesson type={"student"} />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <div className="moduls">
            <div className="">
          <Typography variant="h5" component="div">
            1.HTML
          </Typography>
          <Typography variant="body2">
            Язык гипертекствой разметки
          </Typography>
            </div>
            <div className="">
          <button className='module__info-btn'>
            <FolderOpenOutlinedIcon />
           Изучить
          </button>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Lesson type={"student"} />
          <Lesson type={"student"} />
          <Lesson type={"student"} />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <div className="moduls">
            <div className="">
          <Typography variant="h5" component="div">
            1.HTML
          </Typography>
          <Typography variant="body2">
            Язык гипертекствой разметки
          </Typography>
            </div>
            <div className="">
          <button className='module__info-btn'>
            <FolderOpenOutlinedIcon />
           Изучить
          </button>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Lesson type={"student"} />
          <Lesson type={"student"} />
          <Lesson type={"student"} />
        </AccordionDetails>
      </Accordion>

    </div>
  )
}

export default Module