import TextField from '@mui/material/TextField';
import TextEditor from './components/TextEditor';
import { useEffect, useState } from 'react';
import ModuleService from '../../../services/ModuleService';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';

const UpdateLesson = () => {
    const { id } = useParams()
    const [title, setTitle] = useState('Введите название');
    const [content_html, setContentHtml] = useState('');
  
    const handleTextChange = (content) => {
      setContentHtml(content);
    };
  
    const handleTitleChange = (event) => {
      setTitle(event.target.value);
    };
    
    const deleteLesson = async () => {
        try {
          const response = await ModuleService.deleteContent(id);
          console.log(response.data);
        } catch (e) {
          console.log(e.response);
        }
      };

    
      const updateLesson = async () => {
        try {
          const response = await ModuleService.updateContent(id, {
            title,
            content_html,
          });
          console.log(response.data);
        } catch (e) {
          console.log(e.response);
        }
      };
      
    const getLecture = async () => {
      try {
        const response  = await ModuleService.getLecture(id)
        console.log(response.data);
        setTitle(response.data.title)
        setContentHtml(response.data.content_html)
      } catch (error) {
        console.log(error.response.data);
      }
    }

    useEffect(() => {
      getLecture()
    }, [])

  return (
    <div style={{ padding:"20px", borderRadius:"4px", background:"blue", display:"flex", flexDirection:"column", rowGap:"20px"}}>
        <Button onClick={deleteLesson} color='error' variant='contained'>Удалить урок</Button>
        <TextField
          required
          focused
          id="outlined-required"
          label="Название урока"
          value={title} 
          onChange={handleTitleChange} 
        />    
        <TextEditor content={content_html} onTextChange={handleTextChange}/>
        <Button onClick={updateLesson} color="info" variant='contained'>Save Lesson</Button>
    </div>
  )
}

export default UpdateLesson