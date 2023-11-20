import {useState} from 'react'
import Module from './components/Module/index';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import "./index.css";
import Modal from '../../../components/Modal';
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";

const StudentCourse = () => {
  const [modal, setModal] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className='mentor-container'>
      <h2 className='mc__title'>Учебный план курса</h2>
      <p className='mc__emptytxt'>Создайте учебный план</p>
      <button className='mcourse__addmodule' style={{background:colors.grey[500]}} onClick={() => setModal(true)}>
        <CreateNewFolderOutlinedIcon/>
        Добавить модуль
        </button>
        <div className="mc__lecture-container">
          <Module/>
        </div>
        <Modal active={modal} setActive={setModal}>
          <div className="" style={{display:"flex", flexDirection:"column"}}>
          <h2 style={{color:"black"}}>Добавить новый модуль</h2>
          <input type="text" placeholder='Название модуля' style={{padding:"15px", margin:"20px 0px"}}/>
          <input type="text" placeholder='Описание модуля' style={{padding:"15px"}}/>
          </div>
      </Modal>
    </div>
  )
}

export default StudentCourse