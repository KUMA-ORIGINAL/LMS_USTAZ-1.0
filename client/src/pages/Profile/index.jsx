import "./index.css"

import ProfileAvatar from "../../assets/images/profile-avatar.png"
import DemoCourseImg from "../../assets/images/demo-course.png"
import CourseDoingImg from "../../assets/images/course-doing.png"

const Profile = () => {
  return (
    <div className="container">
        <section className="profile-user">
            <div className="profile__card">
                <img src={ProfileAvatar} alt="" className="profile__card-img" />
                <h3 className="profile__card-title">Максат Каныбеков</h3>
                <div className="profile__card-box">
                <p className="profile__card-age">Возраст: {18}</p>
                <p className="profile__card-phone">Телефон: {224077979}</p>
                <p className="profile__card-email">Почта:maksatkanybekov2004@gmailcom</p>
                </div>
                <button className="profile__card-logout">Выйти</button>
            </div>
        </section>
        <section className="profile-courses">
            <h2 className="profile__courses-title">Мои Курсы</h2>
            <div className="profile__courses-container">
                <div className="profile__course-card">
                    <div className="profile__course-info">
                      <div className="profile__course-text">
                        <p>Направление</p>
                        <h4>Front-End разработка</h4>
                      </div>
                      <div className="profile__course-bar">
                        <div className="profile__course-barline"></div>
                      </div>
                      <div className="profile__course-status">
                        <img src={CourseDoingImg} alt="" />
                        <p>В процессе</p>
                      </div>
                    </div>
                    <img src={DemoCourseImg} alt="" className="profile__course-img" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Profile