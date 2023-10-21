import "./index.css";

const StudentHome = () => {
  return (
    <section className='student-home'>
      <div className="sh__welcome">👋 Как дела, {"Максат"}? Готов покорять мир программирования💻🚀?</div>
      <div className="sh__courses">
        <h2>Мои курсы</h2>
        <div className="sh__courses-card"></div>
      </div>
      <div className="sh__tasks">
      <h2>Новости</h2>
      </div>
      <div className="sh__phrase">
      <h2>Мотивация</h2>
      </div>
    </section>
  )
}

export default StudentHome