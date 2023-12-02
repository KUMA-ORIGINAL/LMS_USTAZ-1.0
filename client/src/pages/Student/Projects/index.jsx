import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import ProjectsList from './components/ProjectsList';
import styled from "styled-components";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Modal from "../../../components/Modal"
import ProjectService from '../../../services/ProjectService';

const StudentProjects = () => {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")


    const createProject = async () => {
        try {
            const newData = {
                title, 
                description,
                course_id:sessionStorage.getItem('selectedCourseId'),
            }
            const response = ProjectService.createProject()
        } catch (error) {
            
        }
    }
    return (
        <ProjectWrapper>
            <h2>Загрузить работы</h2>
            <button onClick={() => setModal(true)}>
                Загрузить
                <DriveFolderUploadOutlinedIcon />
            </button>
            <div>
                <h2>Мои работы</h2>
                <ProjectsList />
            </div>
            <Modal active={modal} setActive={setModal}>
                <select name="" id="">
                    <option value="practical_work">Практическая работа</option>
                    <option value="independent_work">Самостоятельная работа</option>
                    <option value="project">Проект</option>
                </select>
               <input type="text"  placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
               <input type="text" placeholder='Description' value={description} onChange={(e) => setDate(e.target.value)}/>
               <input type="file"  />
               <button>Submit</button>
            </Modal>
        </ProjectWrapper>
    )
}

export default StudentProjects


const ProjectWrapper = styled.div`
    // button{
    //     margin-top: 8px;
    //     margin-bottom: 30px;
    //     padding: 8px 20px;
    //     display: flex;
    //     align-items: center;
    //     column-gap: 5px;
    //     border: none;
    //     border-radius: 5px;
    // }
    // button:active{
    //     background: grey;
    // }
`