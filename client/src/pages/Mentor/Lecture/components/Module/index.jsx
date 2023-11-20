import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import {useState} from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Lesson from '../Lesson/index';
import Modal from '../../../../../components/Modal';
import TextEditor from '../TextEditor/index.';
import { useTheme } from "@mui/material";
import { tokens } from "../../../../../theme";
import "./index.css";

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
            Язык гипертекствой разметки
          </Typography>
        </div>
        <button className='module__info-btn' style={{background:colors.grey[500]}}  onClick={() => setModal(true)}>
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
      <div className="" style={{display:"flex", flexDirection:"column"}}>
        <h2 style={{color:"black"}}>Добавить новый урок</h2>
          <input type="text" placeholder='Название урока' style={{padding:"15px", margin:"20px 0px"}}/>
          <TextEditor/>
        </div>
      </Modal>
    </div>
  )
}

export default Module