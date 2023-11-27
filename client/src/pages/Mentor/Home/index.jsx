import React, { useState } from 'react'
import CourseCard from '../../../components/CourseCard'
import NewsList from '../../../components/NewsList'
import CourseService from '../../../services/CourseService'
import ModuleService from '../../../services/ModuleService'

const MentorHome = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function getModule(){
    try{

      const response = await ModuleService.getModule();
      console.log(response);
    }catch(e){
      console.log(e);
    }
  }

  const createModule = async () => {
    try{
      const response = await ModuleService.createModule({title, description, course:11});
      console.log(response.data);
    }catch(e){
      console.log(e.response);
    }
  }
  async function getCourse() {
    try {
      const response = await CourseService.getCourse();
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    }
  }
  return (
    <>
      <h2 style={{marginBottom:"20px"}}>Курсы</h2>
        <button onClick={getCourse}>Click</button>
        <button onClick={getModule}>Get Module</button>
      <div style={{display:"flex", flexWrap:"wrap", gap:"20px",}}>
        {data.map((course) => (
  <CourseCard key={course.id} data={course} />
))}
      </div>
      <input type="text" 
      placeholder='Название модуля' 
      value={title} 
      onChange={(e) => setTitle(e.target.value)}
      />
      <input type="text"
       placeholder='Описание модуля'
       value={description} 
       onChange={(e) => setDescription(e.target.value)} 
       />
       <button onClick={createModule}>Create Module</button>
      <h2 style={{margin:"20px 0px"}}>
        Новости
        </h2>
      <NewsList/>
    </>
  )
}

export default MentorHome;