import {useState} from 'react'
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import "./index.css"
import Modal from '../../../../../components/Modal';
import TextEditor from '../TextEditor/index.';

const Lesson = ({title}) => {
  const [modal, setModal] = useState(false);
  return (
    <Paper elevation={3} className="lesson-card" >
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <button className='lesson__card-btn'  onClick={() => setModal(true)}>
        <EditIcon/>
        </button>
        <Modal active={modal} setActive={setModal}>
        <TextEditor/>
      </Modal>
    </Paper>
  )
}

export default Lesson