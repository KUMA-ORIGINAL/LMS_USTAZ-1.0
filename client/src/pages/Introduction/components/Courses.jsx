import FrontImg from "../../../assets/images/courses-frontend.png";
import BackImg from "../../../assets/images/courses-backend.png";

const Courses = () => {
  return (
    <secton id="courses">
        <div className="container">
            <div className="courses__content">
                <h2 className="courses__content-title">Направления</h2>
                <p className="courses__content-subtitle"></p>
                <div className="courses__content-wrapper">
                    <div className="courses__wrapper-card">
                        <div className="course__card-info">
                            <h4 className="course__card-title">Front-End</h4>
                            <p className="course__card-time">6 месяцев</p>
                            <button className="course__card-btn">Узнать больше</button>
                        </div>
                        <img src={FrontImg} alt="" className="course__card-img" />
                    </div>
                    <div className="courses__wrapper-card"></div>
                </div>
            </div>
        </div>
    </secton>
  )
}

export default Courses