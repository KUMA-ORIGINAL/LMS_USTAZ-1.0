import TextField from '@mui/material/TextField';
import TextEditor from '../../../components/TextEditor';
import { useEffect, useState } from 'react';
import ModuleService from '../../../services/ModuleService';
import { useParams } from 'react-router-dom';

const CreateLesson = () => {
    const { id } = useParams()
    const [title, setTitle] = useState('Введите название');
    const [content_html, setContentHtml] = useState('');
  
    const handleTextChange = (content) => {
      setContentHtml(content);
    };
  
    const handleTitleChange = (event) => {
      setTitle(event.target.value);
    };
    
    const createLesson = async () => {
      try {
        const response = await ModuleService.createContent({title,content_html,module:id})
        console.log(response.data);
      } catch (e) {
        console.log(e.response);
      }
    }

  return (
    <div style={{ padding:"20px", borderRadius:"4px", background:"blue"}}>
        <TextField
          required
          focused
          id="outlined-required"
          label="Название урока"
          value={title} 
          onChange={handleTitleChange} 
        />    
        <TextEditor  onTextChange={handleTextChange}/>
        <button onClick={createLesson}>Save Lesson</button>
    </div>
  )
}

export default CreateLesson