import React from 'react'
import SchoolIcon from '@mui/icons-material/School';

const CreateCourse = () => {
  return (
    <div>
        <h3 style={{display:"flex", alignItems:"center", columnGap:"20px"}}>Создать новую группу <SchoolIcon/></h3>
        <input style={{display:"inline-block",padding:"15px", width:"50%", margin:"15px 0px"}} type="text" name="" id="" placeholder='Название группы' />

    </div>
  )
}

export default CreateCourse