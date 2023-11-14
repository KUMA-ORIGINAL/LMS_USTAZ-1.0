import {useState} from 'react'
import Module from './components/Module/index';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import "./index.css";
import Modal from '../../../components/Modal';
import TextEditor from './components/TextEditor/index.';
const StudentCourse = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className='mentor-container'>
      <h2 className='mc__title'>Учебный план курса</h2>
      <p className='mc__emptytxt'>Создайте учебный план</p>
      <button className='mcourse__addmodule' onClick={() => setModal(true)}>
        <CreateNewFolderOutlinedIcon/>
        Добавить модуль
        </button>
        <div className="mc__lecture-container">
          <Module/>
        </div>
        <Modal active={modal} setActive={setModal}>
        <TextEditor/>
      </Modal>
    </div>
  )
}

export default StudentCourse