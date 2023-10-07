import FrontImg from '../../../assets/images/courses-frontend.png'
import BackImg from '../../../assets/images/courses-backend.png'

const Courses = () => {
  return (
    <section id="courses">
      <div className="container">
        <div className="courses__content">
          <h2 className="courses__content-title">Направления</h2>
          <p className="courses__content-subtitle"></p>
          <div className="courses__content-wrapper">
            <div className="courses__wrapper-card">
              <div className="course__card-info">
                <h4 className="course__card-title">Front-End</h4>
                <p className="course__card-text">
                  Фронтенд разработка - это процесс создания пользовательского
                  интерфейса веб-сайта или веб-приложения. Во фронтенд
                  разработке используются такие технологит как HTML, CSS и
                  JavaScript,
                </p>
                <button className="course__card-btn">Узнать больше</button>
              </div>
              <img src={FrontImg} alt="" className="course__card-img" />
            </div>
            <div className="courses__wrapper-card">
              <div className="course__card-info">
                <h4 className="course__card-title">Back-End</h4>
                <p className="course__card-text">
                  Бэкенд-разработка - это процесс создания программной части
                  веб-приложений и сервера, которая обрабатывает запросы от
                  клиентов и управляет данными, обеспечивая их хранение,
                  обновление и передачу между клиентами и базами данных.{' '}
                </p>
                <button className="course__card-btn">Узнать больше</button>
              </div>
              <img src={BackImg} alt="" className="course__card-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Courses
