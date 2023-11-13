import React from 'react'
import "./index.css"
import ProjectCard from './components/ProjectCard'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const StudentProjects = () => {
    const projectData = [
        {
            title: "Разработка онлайн-магазина",
            category: "Проект",
            date: "18 Октября, 2023"
        },
        {
            title: "React: Новые возможности.",
            category: "Самостоятельная работа",
            date: "3 Ноября, 2023"
        },
        {
            title: "Разработка CRM-платформы",
            category: "Курсовая работа",
            date: "01 Сентября, 2023"
        },
        {
            title: "Создание лендинг страницы",
            category: "Практическая работа",
            date: "10 Октября, 2023"
        },
    ];
  return (
    <div>
        <h2 className='project-title'>Загрузить новую работу</h2>
        <button className="project-upload">
            Загрузить
            <DriveFolderUploadOutlinedIcon/>
        </button>
        <div className="">
            <h2 className='project-title'>Мои работы</h2>
            <div style={{display:"flex", flexWrap:"wrap", gap:"20px"}}>
            {projectData.map((data, index) => {
                return <ProjectCard data={data} />
            })}
            </div>
        </div>
    </div>
  )
}

export default StudentProjects