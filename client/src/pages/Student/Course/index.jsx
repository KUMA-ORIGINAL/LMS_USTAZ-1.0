import React from 'react'
import Module from './components/Module/index';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import "./index.css";


const Lecture = () => {
  return (
    <div className='mentor-container'>
      <h2 className='mc__title'>Лекции дисцилины
      <ImportContactsOutlinedIcon/>
      </h2>
        <div className="mc__lecture-container">
               <Module />
        </div>
    </div>
  )
}

export default Lecture