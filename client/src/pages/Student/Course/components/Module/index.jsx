import React from 'react'
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined'
import Typography from '@mui/material/Typography'
import Lesson from '../Lesson/index'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import { styled } from '@mui/material/styles'
import './index.css'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  marginTop: '20px',
  background: 'none',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    transition: 'height 0.3s ease',
  })
)

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  backgroundColor: 'none',
  transition: '3s ease',
}))

const frontend = [
  {
    title: 'Направления в IT',
  },
  {
    title: 'Front-end Back-end',
  },
  {
    title: 'Front-end',
  },
  {
    title: 'HTML,CSS,JavaScript',
  },
]
const html = [
  {
    title: 'Структура документа',
  },
  {
    title: 'Элементы и атрибуты',
  },
  {
    title: 'Заголовки и абзацы',
  },
  {
    title: 'Списки',
  },
]
const css = [
  {
    title: 'Что такое CSS',
  },
  {
    title: 'Селекторы, CSS-свойства, Значение ',
  },
  {
    title: 'flexbox grid',
  },
  {
    title: 'Методология CSS',
  },
]
const javascript = [
  {
    title: 'Введение в JavaScript.',
  },
  {
    title: 'Переменные и типы данных в JavaScript.',
  },
  {
    title: 'Операторы и условные выражения.',
  },
  {
    title: 'Функции и область видимости.',
  },
]
const git = [
  {
    title: 'Основы Git - Создание Git-репозитория',
  },
  {
    title: 'Принципы работы GitHub',
  },
  {
    title: 'git init, git clone, git add, git commit, git push',
  },
  {
    title: 'Методология CSS',
  },
]

const Module = () => {
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  
  return (
    <div className="module-content">
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="moduls">
            <div className="">
              <Typography variant="h5" component="div">
                1.Введение в веб-разработку
              </Typography>
              <Typography variant="body2">
                Различие Front-End и Back-end
              </Typography>
            </div>
            <div className="">
              <button className="module__info-btn">
                <FolderOpenOutlinedIcon />
                Изучить
              </button>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {frontend.map((lessons, index) => {
            return <Lesson title={lessons.title} type={'student'} />
          })}
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="moduls">
            <div className="">
              <Typography variant="h5" component="div">
                2.HTML - Hyper Tetx Markup Language
              </Typography>
              <Typography variant="body2">
                Язык гипертекстовой разметки (.html)
              </Typography>
            </div>
            <div className="">
              <button className="module__info-btn">
                <FolderOpenOutlinedIcon />
                Изучить
              </button>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {html.map((lessons, index) => {
            return <Lesson title={lessons.title} type={'student'} />
          })}
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="moduls">
            <div className="">
              <Typography variant="h5" component="div">
                3.СSS - Cascading Style Sheet
              </Typography>
              <Typography variant="body2">
                Каскадные таблицы стилей (.css)
              </Typography>
            </div>
            <div className="">
              <button className="module__info-btn">
                <FolderOpenOutlinedIcon />
                Изучить
              </button>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {css.map((lessons, index) => {
            return <Lesson title={lessons.title} type={'student'} />
          })}
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="moduls">
            <div className="">
              <Typography variant="h5" component="div">
                4.Javascript
              </Typography>
              <Typography variant="body2">
                Язык программирования JavaScript (.js)
              </Typography>
            </div>
            <div className="">
              <button className="module__info-btn">
                <FolderOpenOutlinedIcon />
                Изучить
              </button>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {javascript.map((lessons, index) => {
            return <Lesson title={lessons.title} type={'student'} />
          })}
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="moduls">
            <div className="">
              <Typography variant="h5" component="div">
                5.Git, Github
              </Typography>
              <Typography variant="body2">Git и командная работа</Typography>
            </div>
            <div className="">
              <button className="module__info-btn">
                <FolderOpenOutlinedIcon />
                Изучить
              </button>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {git.map((lessons, index) => {
            return <Lesson title={lessons.title} type={'student'} />
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Module
