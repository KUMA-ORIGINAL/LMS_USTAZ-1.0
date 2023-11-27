
import TextField from '@mui/material/TextField';
import TextEditor from '../../../components/TextEditor';
import { useState } from 'react';

const CreateLesson = () => {
    const [lessonTitle, setLessonTitle] = useState('Введите название');
    const [lessonContent, setLessonContent] = useState('');
  
    const handleTextChange = (content) => {
      setLessonContent(content);
    };
  
    const handleTitleChange = (event) => {
      setLessonTitle(event.target.value);
    };
  return (
    <div style={{ padding:"20px", borderRadius:"4px", background:"blue"}}>
        <TextField
          required
          focused
          id="outlined-required"
          label="Название урока"
          defaultValue="Введите название"
        />

        <TextEditor onTextChange={handleTextChange}/>
    </div>
  )
}

export default CreateLesson