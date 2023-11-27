import CourseCard from '../../../components/CourseCard'
import NewsList from '../../../components/NewsList'
import CourseService from '../../../services/CourseService'
import './index.css'
import { useEffect, useState } from 'react'


const StudentHome = () => {
  const [course, setCourse] = useState([])

  async function getCourse() {
    try {
        const response = await CourseService.getCourse();
        console.log(response);
        setCourse(response.data)
    } catch (e) {
        console.log(e.response);
    }
}

useEffect(() => {
  getCourse();
},[])

const user = JSON.parse(localStorage.getItem("user"));


  return (
    <section className="student-home">
      <div className="sh__welcome">
        👋 Как дела, {user.first_name}? Готов покорять мир программирования💻🚀?
      </div>
      <div className="sh__content">
        <div className="sh__courses">
          <h2 style={{ margin: "30px 0px" }}>Мои курсы</h2>
          <div className="sh__courses-card">
            {course.map((data) => {
              return <CourseCard data={data}/>  
            } )}
          </div>
        </div>
        <div className="sh__tasks">
          <h2 style={{ margin: "30px 0px" }}>Новости</h2>
          <div className="sh__news">
            <NewsList />
          </div>

        </div>
      </div>
    </section>
  )
}

export default StudentHome
