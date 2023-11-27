import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import ProjectsList from './components/ProjectsList';
import styled from "styled-components";
import { useState } from 'react';
import Modal from "../../../components/Modal"

const StudentProjects = () => {
    const [modal, setModal] = useState(false);

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
                <h6>Загрузка работы</h6>
            </Modal>
        </ProjectWrapper>
    )
}

export default StudentProjects


const ProjectWrapper = styled.div`
    button{
        margin-top: 8px;
        margin-bottom: 30px;
        padding: 8px 20px;
        display: flex;
        align-items: center;
        column-gap: 5px;
        border: none;
        border-radius: 5px;
    }
    button:active{
        background: grey;
    }
`