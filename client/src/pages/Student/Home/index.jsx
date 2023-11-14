import CourseCard from '../../../components/CourseCard'
import NewsList from '../../../components/NewsList'
import './index.css'

const StudentHome = () => {
  return (
    <section className="student-home">
      <div className="sh__welcome">
        👋 Как дела, {'Максат'}? Готов покорять мир программирования💻🚀?
      </div>
      <div className="sh__content">
        <div className="sh__courses">
          <h2 style={{margin:"30px 0px"}}>Мои курсы</h2>
          <div className="sh__courses-card">
            <CourseCard/>
          </div>
        </div>
        <div className="sh__tasks">
          <h2 style={{margin:"30px 0px"}}>Новости</h2>
          <div className="sh__news">
            <NewsList/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentHome
