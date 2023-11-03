import React from 'react'
import Module from './components/Module/index';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import "./index.css";

const Lecture = () => {
  return (
    <div className='mentor-container'>
      <h2 className='mc__title'>Учебный план курса</h2>
      <p className='mc__emptytxt'>Создайте учебный план</p>
      <button className='mcourse__addmodule'>
        <CreateNewFolderOutlinedIcon/>
        Добавить модуль
        </button>
        <div className="mc__lecture-container">
          <Module/>
        </div>
    </div>
  )
}

export default Lecture