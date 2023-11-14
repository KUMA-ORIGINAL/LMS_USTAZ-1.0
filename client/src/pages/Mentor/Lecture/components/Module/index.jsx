import {useState} from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import Lesson from '../Lesson/index';
import "./index.css";
import Modal from '../../../../../components/Modal';
import TextEditor from '../TextEditor/index.';
const Module = () => {
  const [modal, setModal] = useState(false)
  const html = [
    {
      title:"Структура документа"
    },
    {
      title:"Элементы и атрибуты"
    },
    {
      title:"Заголовки и абзацы"
    },
    {
      title:"Списки"
    }
  ]
  console.log(modal);
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
        <button className='module__info-btn' onClick={() => setModal(true)}>
          <AttachFileOutlinedIcon />
          Добавить урок
        </button>
      </Paper>
      {
        html.map((data) => {
          return <Lesson title={data.title}/>
        })
      }
      <Modal active={modal} setActive={setModal}>
        <TextEditor/>
      </Modal>
    </div>
  )
}

export default Module